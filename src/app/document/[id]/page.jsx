"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DocumentDetail() {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Lấy chi tiết tài liệu ---
  useEffect(() => {
    async function fetchDetail() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_DETAIL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        if (!res.ok) throw new Error(`Lỗi HTTP ${res.status}`);
        const json = await res.json();

        let found = null;
        const normalize = (v) => String(v || "").trim().toLowerCase();

        if (Array.isArray(json)) {
          found = json.find((item) => normalize(item.id) === normalize(id));
        } else if (Array.isArray(json?.data)) {
          found = json.data.find((item) => normalize(item.id) === normalize(id));
        } else if (json?.id && normalize(json.id) === normalize(id)) {
          found = json;
        }

        if (!found) throw new Error("Không tìm thấy tài liệu phù hợp với ID " + id);
        setDoc(found);
      } catch (error) {
        console.error("❌ Lỗi khi tải tài liệu:", error);
        setError(error.message);
        setDoc(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchDetail();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-full text-[#fd6600] font-medium text-lg animate-pulse">
        ⏳ Đang tải dữ liệu...
      </div>
    );
  if (error)
    return (
      <div className="p-3 text-center text-red-600 bg-[#fff4e3] rounded-xl shadow-md">
        ❌ Không thể tải tài liệu: {error}
      </div>
    );
  if (!doc)
    return (
      <div className="p-3 text-center text-gray-600 bg-[#fff4e3] rounded-xl shadow-md">
        Không tìm thấy tài liệu.
      </div>
    );

  return (
    <main className="p-3 bg-[#fff4e3] rounded-2xl shadow-md border border-white space-y-6 animate-fade-in">

      {/* Tiêu đề */}
      <h1 className="text-2xl font-semibold text-[#fd6600] border-b-3 border-[#ffdf99] pb-1 py-2 px-2">📚
        {doc.title}
      </h1>

      {/* Thông tin chi tiết */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-800 bg-white rounded-xl px-4 py-4 border-l-4 border-[#fd6600] shadow-sm">
        <p>
          <strong className="text-[#fd6600]">Mã tài liệu:</strong> {doc.id}
        </p>
        <p>
          <strong className="text-[#fd6600]">Loại tài liệu:</strong> {doc.type}
        </p>
        <p>
          <strong className="text-[#fd6600]">Phòng ban:</strong> {doc.department}
        </p>
        <p>
          <strong className="text-[#fd6600]">Phân quyền:</strong> {doc.tags}
        </p>
        <p>
          <strong className="text-[#fd6600]">Chia sẻ cho:</strong> {doc.share}
        </p>
        <p>
          <strong className="text-[#fd6600]">Số phần:</strong> {doc.part}
        </p>
        <p>
          <strong className="text-[#fd6600]">Thời lượng học:</strong>{" "}
          {doc.learn_time}
        </p>
        <p>
          <strong className="text-[#fd6600]">Cập nhật:</strong>{" "}
          {doc.updated_at}
        </p>
      </div>

      {/* Giới thiệu */}
      {doc.intro && (
        <section className="bg-white px-4 py-4 rounded-xl border-l-4 border-[#fd6600] shadow-sm">
          <h2 className="text-2xl font-bold text-[#fd6600] mb-2">
            ℹ️ Giới thiệu
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {doc.intro}
          </p>
        </section>
      )}

      {/* Mục tiêu */}
      {doc.target && (
        <section className="bg-white px-4 py-4 rounded-xl border-l-4 border-[#fd6600] shadow-sm">
          <h2 className="text-2xl font-bold text-[#fd6600] mb-2">
            🎯 Những gì bạn sẽ học được
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {doc.target}
          </p>
        </section>
      )}

      {/* --- Nút hành động --- */}
      <div className="flex flex-wrap gap-4 mt-8">
        <button
          onClick={() => (window.location.href = `/document/${doc.id}/view`)}
          className="px-5 py-3 bg-[#fd6600] text-white font-semibold rounded-xl shadow hover:bg-[#ff751f] transition-all"
        >
          Bắt đầu
        </button>

        <button
          onClick={() => window.history.back()}
          className="px-5 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow hover:bg-[#ffdf99] hover:text-black transition-all"
        >
          Kiến thức khác →
        </button>
      </div>
    </main>
  );
}
