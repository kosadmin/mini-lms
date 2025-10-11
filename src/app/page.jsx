"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
        const json = await res.json();
        setData(json.data || json);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="p-6">⏳ Đang tải dữ liệu...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📚 Danh sách tài liệu</h1>

      {data.length === 0 ? (
        <p>Không có dữ liệu nào.</p>
      ) : (
        <table className="border-collapse border border-gray-400 w-full text-sm">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2 bg-gray-100">Tiêu đề</th>
              <th className="border border-gray-400 p-2 bg-gray-100">Phòng ban</th>
              <th className="border border-gray-400 p-2 bg-gray-100">Loại</th>
              <th className="border border-gray-400 p-2 bg-gray-100">Phân quyền</th>
              <th className="border border-gray-400 p-2 bg-gray-100">Cập nhật</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                onClick={() => router.push(`/document/${encodeURIComponent(row.id)}`)}
                className="cursor-pointer hover:bg-gray-100 transition"
              >
                <td className="border border-gray-400 p-2">{row.title}</td>
                <td className="border border-gray-400 p-2">{row.department}</td>
                <td className="border border-gray-400 p-2">{row.type}</td>
                <td className="border border-gray-400 p-2">{row.tags}</td>
                <td className="border border-gray-400 p-2">{row.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
