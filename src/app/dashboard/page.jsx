// app/dashboard/page.jsx
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#fd6600]">Dashboard</h1>

      {/* Tổng quan điểm và tiến độ */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#fd6600]">
          <p className="text-gray-600 mb-1">Tổng điểm</p>
          <h2 className="text-3xl font-bold text-[#fd6600]">850 / 1000</h2>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#fbd72b]">
          <p className="text-gray-600 mb-1">Khoá học đã hoàn thành</p>
          <h2 className="text-3xl font-bold">5</h2>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#fd6600]">
          <p className="text-gray-600 mb-1">Thời gian học</p>
          <h2 className="text-3xl font-bold">12 giờ</h2>
        </div>
      </div>

      {/* Các khoá học nổi bật */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Khoá học nổi bật</h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-xl shadow-sm hover:shadow-lg transition p-4">
              <img
                src={`/course-${i}.jpg`}
                alt="Course"
                className="rounded-xl mb-3"
              />
              <h3 className="font-semibold text-lg mb-1">Khoá học {i}</h3>
              <p className="text-sm text-gray-600 mb-2">Thời lượng: 45 phút</p>
              <button className="bg-[#fd6600] text-white px-4 py-2 rounded-lg hover:bg-[#e85c00] transition">
                Bắt đầu
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
