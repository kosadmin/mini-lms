"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpenIcon } from "lucide-react";

export default function KnowledgePage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
        const json = await res.json();
        const result = json.data || json;
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Xử lý tìm kiếm client-side
  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = data.filter(
      (row) =>
        row.title?.toLowerCase().includes(lower) ||
        row.department?.toLowerCase().includes(lower) ||
        row.type?.toLowerCase().includes(lower)
    );
    setFilteredData(filtered);
  }, [search, data]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 animate-pulse text-lg">
          ⏳ Đang tải dữ liệu...
        </div>
      </div>
    );

  return (
    <main className="bg-white rounded-2xl shadow-md h-full flex flex-col overflow-hidden">
    {/* Navbar / Header */}
    <div className="flex items-center justify-between gap-4 bg-[#ffdf99] py-3 px-4 rounded-t-2xl border-b-[2px] border-white">
      {/* Tiêu đề */}
      <h1 className="flex items-center gap-2 text-2xl font-bold text-black whitespace-nowrap">
        <BookOpenIcon className="w-6 h-6" />
        Kiến thức
      </h1>

      {/* Ô tìm kiếm */}
      <div className="relative flex-1 max-w-md">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ff751f]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm tài liệu, phòng ban, loại..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#ff751f] focus:ring-2 focus:ring-[#ff751f] focus:outline-none placeholder-gray-500 text-gray-800 text-sm"
        />
      </div>

      {/* Nút thêm tài liệu */}
      <button
        onClick={() => router.push("/document/new")}
        className="bg-[#ff751f] hover:bg-[#e45700] text-white px-4 py-1 rounded-lg shadow-sm transition font-semibold whitespace-nowrap"
      >
        + Thêm tài liệu
      </button>
    </div>


      {/* Table Section */}
      <div className="p-3 flex-1 overflow-auto bg-[#ffffff] rounded-b-2xl">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-600">
            <img
              src="/empty-state.svg"
              alt="No data"
              className="h-40 w-auto opacity-70 mb-4"
            />
            <p>Không có dữ liệu nào.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border-2 border-white shadow-sm">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#ffdf99] text-black font-bold">
                  <th className="p-3 border-b-[3px] border-white">Tiêu đề</th>
                  <th className="p-3 border-b-[3px] border-white">Phòng ban</th>
                  <th className="p-3 border-b-[3px] border-white">Loại</th>
                  <th className="p-3 border-b-[3px] border-white">Phân quyền</th>
                  <th className="p-3 border-b-[3px] border-white">Cập nhật</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, idx) => (
                  <tr
                    key={row.id}
                    onClick={() =>
                      router.push(`/document/${encodeURIComponent(row.id)}`)
                    }
                    className={`cursor-pointer transition font-medium ${
                      idx % 2 === 0 ? "bg-[#fff4e3]" : "bg-[#fff4e3]"
                    } hover:bg-[#ff751f] hover:text-white`}
                  >
                    <td className="p-3 border-b-[3px] border-white">
                      {row.title}
                    </td>
                    <td className="p-3 border-b-[3px] border-white">
                      {row.department}
                    </td>
                    <td className="p-3 border-b-[3px] border-white">
                      {row.type}
                    </td>
                    <td className="p-3 border-b-[3px] border-white">
                      {row.tags}
                    </td>
                    <td className="p-3 border-b-[3px] border-white text-sm">
                      {row.updated_at}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
