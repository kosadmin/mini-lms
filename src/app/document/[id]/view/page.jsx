"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewDocument() {
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
      <iframe
        src={doc.link.replace("view?usp=sharing", "preview")}
        width="100%"
        height="600"
        className="border rounded-lg"
        allow="autoplay"
      ></iframe>

      <div className="mt-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Test
        </button>
      </div>
    </div>
  );
}
