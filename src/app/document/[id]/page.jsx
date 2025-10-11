"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DocumentDetail() {
  const router = useRouter();
  const { id } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    fetch(`/api/sheet?id=${id}`)
      .then(res => res.json())
      .then(data => setDoc(data));
  }, [id]);

  if (!doc) return <div>Đang tải...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{doc.title}</h1>
      <div className="space-y-2">
        <p><b>Loại:</b> {doc.type}</p>
        <p><b>Phòng:</b> {doc.department}</p>
        <p><b>Phân quyền:</b> {doc.tags}</p>
        <p><b>Ngày tạo:</b> {doc.updated_at}</p>
        <p><b>Số phần:</b> {doc.part}</p>
        <p><b>Thời gian học:</b> {doc.learn_time}</p>
        <p><b>Giới thiệu:</b> {doc.intro}</p>
        <p><b>Bạn sẽ học được:</b> {doc.target}</p>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => router.push("/")}
        >
          Kiến thức khác
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => router.push(`/document/${id}/view`)}
        >
          Bắt đầu
        </button>
      </div>
    </div>
  );
}
