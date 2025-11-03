"use client";

import { Sparkles, Lightbulb, Handshake, Rocket } from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="bg-white rounded-2xl shadow-md h-full flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#ffdf99] py-3 px-4 rounded-t-2xl border-b-[2px] border-white">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-black whitespace-nowrap">
          <Sparkles className="w-6 h-6 text-[#ff751f]" />
          Welcome
        </h1>
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 p-8 bg-gradient-to-br from-[#fff9f1] to-[#fffdf8] text-gray-800 leading-relaxed text-justify space-y-5">
        <h2 className="text-center text-2xl font-bold text-[#ff751f] flex justify-center items-center gap-2">
          🌟 Chào mừng bạn đến với Hành trình Học tập tại KOS
        </h2>

        <p>
          <strong>Vào ngày 05/11/2021</strong>, KOS được khởi đầu từ một nhóm nhỏ
          những con người đầy nhiệt huyết, cùng chung một tầm nhìn: xây dựng một
          tổ chức vững chắc về chuyên môn, và tạo ra môi trường nơi mỗi cá nhân
          được phát huy tối đa năng lực của mình.
        </p>

        <div className="flex justify-center my-4">
          <img
            src="/welcome-1.svg"
            alt="Hình minh họa hành trình khởi đầu"
            className="w-[400px] h-auto rounded-2xl shadow-md"
          />
        </div>

        <p>
          Từ những ngày đầu tiên, chúng tôi luôn tin rằng sức mạnh thật sự của
          một doanh nghiệp không chỉ đến từ công nghệ hay chiến lược, mà bắt
          nguồn từ con người – những cá nhân không ngừng học hỏi, hợp tác và
          cùng nhau kiến tạo giá trị.
        </p>

        <div className="flex items-center justify-center gap-2 text-[#ff751f] font-bold my-3">
          <span>💡 Học để hiểu – Hiểu để phát triển</span>
        </div>

        <p>
          Đó là lý do <strong>KOS Academy</strong> ra đời: không chỉ là nơi
          lưu trữ tài liệu hay khóa học, mà là không gian học tập chung của tất
          cả chúng ta. Tại đây, bạn sẽ được khám phá những nội dung cốt lõi về
          nội quy, văn hóa, quy trình làm việc, cũng như các kiến thức, kỹ năng
          chuyên môn và thông tin cập nhật mới nhất.
        </p>

        <p>
          Những quy chuẩn, tài liệu và bài học không nhằm giới hạn, mà giúp bạn
          hiểu rõ hơn quyền lợi, trách nhiệm và cách cùng nhau làm việc hiệu
          quả. Khi cùng chia sẻ một tinh thần và một cách hiểu, chúng ta làm
          việc trôi chảy hơn, chuyên nghiệp hơn và gắn kết hơn.
        </p>

        <div className="flex justify-center my-4">
          <img
            src="/welcome-2.svg"
            alt="Minh họa tinh thần đồng đội"
            className="w-[450px] h-auto rounded-2xl shadow-md"
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-[#ff751f] font-bold my-3">
          <span>🤝 Văn hóa được viết nên từ chính mỗi chúng ta</span>
        </div>

        <p>
          Văn hóa doanh nghiệp không nằm trên giấy. Nó hiện hữu trong thái độ,
          trách nhiệm và tinh thần đồng hành mỗi ngày. Khi bạn chủ động học hỏi,
          sẵn sàng chia sẻ và tôn trọng lẫn nhau, bạn đang góp phần nuôi dưỡng
          một môi trường làm việc thân thiện, cởi mở và luôn sẵn sàng sẻ chia –
          nơi không ai bị bỏ lại phía sau.
        </p>

        <div className="flex items-center justify-center gap-2 text-[#ff751f] font-bold my-3">
          <span>🚀 Cùng nhau vươn xa</span>
        </div>

        <p>
          Bộ tài liệu và khóa học trong <strong>KOS Academy</strong> sẽ
          được cập nhật định kỳ, giúp bạn luôn đồng hành cùng những thay đổi và
          phát triển của công ty. Bởi chuyên nghiệp không chỉ thể hiện ở kết quả
          công việc, mà còn trong cách chúng ta học hỏi, hợp tác và trưởng thành
          cùng nhau 🌱
        </p>

      </div>

      {/* Phần nổi bật cuối (nền cam chữ trắng) */}
      <div className="bg-gradient-to-r from-[#ff9a3c] to-[#fd6600] text-white py-5 px-6 rounded-b-2xl text-center">
        <div className="text-3xl mb-2 filter brightness-0 invert">🌟</div>
        <p className="text-lg font-semibold mb-2">
          Cùng nhau học hỏi – Cùng nhau phát triển
        </p>
        <p className="text-sm opacity-90 max-w-3xl mx-auto">
          Chào mừng bạn đến với hành trình học tập nội bộ của KOS.  
          <br />
          Hãy bắt đầu khám phá, học hỏi và góp phần viết tiếp câu chuyện phát triển của chính mình. Vì ở KOS, chúng ta cùng nhau tiến lên – không ai bị bỏ lại phía sau
        </p>
      </div>
    </main>
  );
}
