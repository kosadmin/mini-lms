// app/layout.jsx
import "./globals.css";
import { Book, BookOpen, House, house, LogOutIcon } from "lucide-react";


export const metadata = {
  title: "Mini LMS",
  description: "Trang học tập và test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="antialiased min-h-screen bg-gradient-to-br from-[#fd6600] to-[#fbd72b] flex justify-center items-center">
        {/* Container chính */}
        <div className="flex gap-[10px] w-[calc(100%-15px)] h-[calc(100vh-15px)] p-[15px] box-border">
          {/* Sidebar - chiếm 1 phần */}
          <aside className="flex-[1] bg-white rounded-2xl shadow-md flex flex-col justify-between p-2">
            {/* Logo */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <img src="/Logo.svg" alt="Logo" className="w-40" />
              </div>

              {/* Menu */}
              <nav className="flex flex-col">
                <a
                  href="/dashboard"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-[#fd6600] hover:text-white transition"
                >
                  <span className="flex items-center gap-2">
                    <House className="w-4 h-4" />
                    Dashboard
                  </span>
                </a>
                <a
                  href="/knowledge"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-[#fd6600] hover:text-white transition"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Kiến thức
                  </span>
                </a>
              </nav>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-100 pt-4 mt-6">
              <a
                href="/logout"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 font-medium hover:text-[#fd6600] transition"
              >
                  <span className="flex items-center gap-2">
                    <LogOutIcon className="w-4 h-4" />
                    Đăng xuất
                  </span>
              </a>
            </div>
          </aside>

          {/* Khối chính - chiếm 6 phần */}
          <main className="flex-[6] bg-white rounded-2xl shadow-md flex flex-col overflow-hidden">
            {/* Header */}
            <header className="flex justify-end items-center px-6 py-2 border-b border-gray-100 bg-white">
              <button className="mr-4 text-gray-600 hover:text-[#fd6600] transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <img
                src="/avatar.svg"
                alt="avatar"
                className="h-9 w-9 rounded-full border border-gray-50"
              />
            </header>

            {/* Nội dung */}
            <section className="flex-1 p-3 overflow-y-auto">{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
