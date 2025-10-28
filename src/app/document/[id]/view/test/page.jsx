"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function TestPage() {
  const { id } = useParams();
  const router = useRouter();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  // --- Fetch dữ liệu bài test ---
  useEffect(() => {
    async function fetchTest() {
      setLoading(true);
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_DETAIL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const json = await res.json();

        let matched = null;
        if (Array.isArray(json)) {
          matched = json.find((item) => String(item.id) === String(id));
        } else if (json?.data) {
          matched = json.data;
        } else {
          matched = json;
        }

        setTest(matched || null);
      } catch (err) {
        console.error("❌ Lỗi khi lấy bài test:", err);
        setTest(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchTest();
  }, [id]);

  // --- Đếm thời gian ---
  useEffect(() => {
    timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        ⏳ Đang tải bài test...
      </div>
    );

  if (!test || !test.link_test)
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        ❌ Không tìm thấy bài test.
      </div>
    );

  return (
    <main className="bg-white rounded-2xl shadow-md h-full flex flex-col overflow-hidden">
      {/* HEADER - đồng bộ với giao diện “Kiến thức” */}
      <div className="flex justify-between items-center bg-yellow-50 px-4 py-2 rounded-t-2xl border-b-[3px] border-white shadow-sm sticky top-[0px] z-30">
        {/* Nút quay lại + tiêu đề */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-white text-black rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-sm"
          >
            ← Quay lại
          </button>
          <h1 className="text-xl font-bold text-black uppercase truncate max-w-[500px]">
            {test.title}
          </h1>
        </div>

        {/* Đếm giờ + nút chuyển trang */}
        <div className="flex items-center gap-4">
          <div className="bg-white text-[#ff751f] font-bold text-sm px-4 py-1.5 rounded-lg shadow-sm border border-[#ffe1c2]">
            ⏱ {formatTime(time)}
          </div>
          <button
            onClick={() => router.push("/knowledge")}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff9a3c] to-[#ff751f] text-white font-bold text-sm shadow-sm transition-all duration-200 hover:scale-105"
          >
            Học kiến thức khác →
          </button>
        </div>
      </div>

      {/* VÙNG HIỂN THỊ BÀI TEST */}
      <div className="flex-1 bg-[#fff4e3] overflow-auto border-t-[3px] border-white rounded-b-2xl">
        <iframe
          src={formatEmbedURL(test.link_test)}
          className="w-full h-[calc(100vh-180px)] border-0 rounded-b-2xl"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}

// --- Xử lý link Google Drive / Docs ---
function formatEmbedURL(url) {
  if (!url) return "";
  if (url.includes("drive.google.com"))
    return url.replace("/view", "/preview");
  if (url.includes("docs.google.com/document"))
    return url.replace("/edit", "/preview");
  return url;
}
