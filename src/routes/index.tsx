import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import uetLogo from "@/assets/uet-logo.webp";
import avatar from "@/assets/avatar.jpg";
import bai1s1 from "@/assets/bai1/s1.png";
import bai1s2 from "@/assets/bai1/s2.png";
import bai1s3 from "@/assets/bai1/s3.png";
import bai1s4 from "@/assets/bai1/s4.png";
import bai1s5 from "@/assets/bai1/s5.png";
import bai1s6a from "@/assets/bai1/s6a.png";
import bai1s6b from "@/assets/bai1/s6b.png";
import bai1s7 from "@/assets/bai1/s7.png";
import bai1s8a from "@/assets/bai1/s8a.png";
import bai1s8b from "@/assets/bai1/s8b.png";
import bai1s8c from "@/assets/bai1/s8c.png";
import bai1s9a from "@/assets/bai1/s9a.png";
import bai1s9b from "@/assets/bai1/s9b.png";
import bai1s9c from "@/assets/bai1/s9c.png";
import bai1s10 from "@/assets/bai1/s10.png";
import bai1s11a from "@/assets/bai1/s11a.png";
import bai1s11b from "@/assets/bai1/s11b.png";
import bai1s11c from "@/assets/bai1/s11c.png";
import bai1s12 from "@/assets/bai1/s12.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio Kỹ thuật số — Sinh viên UET" },
      {
        name: "description",
        content:
          "Portfolio kỹ thuật số môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo — Đại học Công nghệ, ĐHQGHN.",
      },
    ],
  }),
  component: Portfolio,
});

type ExerciseContent = {
  id: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  objective: string;
  process: { heading: string; body: string }[];
  outcome: string;
  reflection: string;
};

const exercises: ExerciseContent[] = [
  {
    id: "bai1",
    shortLabel: "Bài 1",
    title: "Bài 1 — Thao tác cơ bản với tệp tin và thư mục",
    subtitle: "MỤC 1.4 - BÀI 1: MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI",
    objective:
      "Thiết kế một cấu trúc thư mục cá nhân tối ưu phục vụ học tập tại UET, áp dụng quy tắc đặt tên tệp nhất quán, có hệ thống sao lưu và đồng bộ trên nhiều thiết bị.",
    process: [
      {
        heading: "1. Phân tích nhu cầu",
        body: "Xác định các nhóm dữ liệu chính: tài liệu môn học, bài tập cá nhân, dự án nhóm, tài nguyên tham khảo và file cá nhân. Mỗi nhóm có vòng đời và tần suất truy cập khác nhau nên cần tách bạch rõ ràng.",
      },
      {
        heading: "2. Thiết kế cấu trúc thư mục",
        body: "Cấp 1 chia theo học kỳ (HK1-2024, HK2-2024…), cấp 2 chia theo mã môn (INT2208, INT2215…), cấp 3 chia theo dạng tài nguyên (slide, baitap, dukien, tham-khao). Mỗi thư mục đều có file README.md mô tả ngắn nội dung.",
      },
      {
        heading: "3. Quy tắc đặt tên",
        body: "Tệp được đặt theo cú pháp [MãMôn]_[Loại]_[Mô-tả]_[YYYYMMDD]_v[phiên-bản].ext. Ví dụ INT2208_BaiTap_QuanLyTep_20250318_v2.docx. Không dùng dấu tiếng Việt, không dùng khoảng trắng, ưu tiên kebab-case hoặc snake_case.",
      },
      {
        heading: "4. Sao lưu và đồng bộ",
        body: "Áp dụng quy tắc 3-2-1: 3 bản sao, 2 phương tiện khác nhau, 1 bản ngoài máy. Triển khai bằng OneDrive (đồng bộ chính), ổ cứng ngoài (sao lưu hàng tuần) và Google Drive (bản dự phòng nén theo tháng).",
      },
    ],
    outcome:
      "Một cây thư mục rõ ràng, có thể tìm kiếm bằng từ khóa trong vòng vài giây, kèm ảnh chụp minh họa cấu trúc và bảng quy tắc đặt tên ở định dạng PDF.",
    reflection:
      "Việc đặt tên tệp nhất quán tiết kiệm rất nhiều thời gian khi quay lại tìm tài liệu cũ. Ngoài ra, README ngắn ở mỗi thư mục giúp 'phiên bản tương lai' của mình hiểu ngay ngữ cảnh.",
  },
  {
    id: "bai2",
    shortLabel: "Bài 2",
    title: "Bài 2 — Tìm kiếm và đánh giá thông tin học thuật",
    subtitle: "MỤC 2.4 - BÀI 2: KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    objective:
      "Thực hành tìm kiếm học thuật nâng cao với các toán tử của Google Search, Google Scholar và đánh giá độ tin cậy của nguồn tin theo bộ tiêu chí CRAAP.",
    process: [
      {
        heading: "1. Câu hỏi nghiên cứu",
        body: "Chủ đề: 'Ứng dụng học sâu trong nhận dạng ngôn ngữ ký hiệu tiếng Việt'. Xác định từ khóa lõi tiếng Anh và tiếng Việt, đồng nghĩa và biến thể.",
      },
      {
        heading: "2. Toán tử tìm kiếm",
        body: "Áp dụng các toán tử nâng cao: site:arxiv.org, filetype:pdf, intitle:\"sign language\", \"Vietnamese sign\" -baseline, intext:CNN AROUND(3) transformer, daterange 2020..2025. Ghi lại 6 truy vấn khác nhau và số kết quả thu được.",
      },
      {
        heading: "3. Đánh giá nguồn theo CRAAP",
        body: "Mỗi nguồn được chấm điểm 5 tiêu chí: Currency (cập nhật), Relevance (liên quan), Authority (uy tín tác giả/tạp chí), Accuracy (có trích dẫn, dữ liệu), Purpose (mục đích trung lập hay quảng cáo).",
      },
      {
        heading: "4. Tổng hợp kết quả",
        body: "Chọn ra 10 nguồn tốt nhất, lập bảng so sánh trong Notion, đính kèm DOI và link Zotero. Loại bỏ các blog không có tác giả rõ ràng và các bài báo dưới 5 trích dẫn quá 3 năm.",
      },
    ],
    outcome:
      "Bảng đánh giá 10 nguồn dạng spreadsheet, ảnh chụp kết quả tìm kiếm cho từng toán tử và file BibTeX để tái sử dụng trong các báo cáo sau.",
    reflection:
      "Toán tử AROUND() và site: giúp lọc nhiễu hiệu quả hơn nhiều so với gõ từ khóa thường. Tiêu chí CRAAP buộc mình phải kiểm tra cả uy tín tác giả chứ không chỉ tiêu đề bài báo.",
  },
  {
    id: "bai3",
    shortLabel: "Bài 3",
    title: "Bài 3 — Viết Prompt hiệu quả cho các tác vụ học tập",
    subtitle: "MỤC 3.4 - BÀI 3: TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO ",
    objective:
      "So sánh kết quả đầu ra giữa prompt ban đầu và prompt cải tiến áp dụng các nguyên tắc Role · Context · Task · Format · Constraint, từ đó rút ra quy trình viết prompt cho học tập.",
    process: [
      {
        heading: "1. Bài toán",
        body: "Yêu cầu AI tóm tắt chương 'Mạng nơ-ron tích chập' từ giáo trình tiếng Anh thành ghi chú ôn thi tiếng Việt cho sinh viên Kỹ thuật máy tính.",
      },
      {
        heading: "2. Prompt v1 (ban đầu)",
        body: "\"Tóm tắt chương CNN giúp tôi\". Kết quả: chung chung, không có ví dụ, độ dài không kiểm soát, thuật ngữ dịch chưa nhất quán.",
      },
      {
        heading: "3. Prompt v2 (cải tiến)",
        body: "Bổ sung vai trò ('Bạn là trợ giảng môn Thị giác máy tính'), bối cảnh (sinh viên năm 3 UET đã học Đại số tuyến tính), nhiệm vụ (tóm tắt 800 từ + 5 câu hỏi ôn tập), định dạng (Markdown có heading), ràng buộc (giữ nguyên thuật ngữ tiếng Anh trong ngoặc).",
      },
      {
        heading: "4. So sánh & phân tích",
        body: "Lập bảng đối chiếu hai phiên bản theo 4 tiêu chí: độ chính xác kỹ thuật, mức độ phù hợp người học, tính cấu trúc và khả năng tái sử dụng. Prompt v2 vượt trội ở cả 4 mục.",
      },
    ],
    outcome:
      "Tài liệu so sánh hai phiên bản prompt, ảnh chụp output của AI và bộ template prompt cá nhân cho 5 tác vụ học tập thường gặp.",
    reflection:
      "Viết prompt tốt giống như viết đề bài rõ ràng — càng cụ thể vai trò, đối tượng và định dạng đầu ra thì AI càng ít 'sáng tác' và bám sát mục tiêu học tập.",
  },
  {
    id: "bai4",
    shortLabel: "Bài 4",
    title: "Bài 4 — Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    subtitle: "MỤC 4.4 - BÀI 4: GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ ",
    objective:
      "Triển khai quy trình quản lý dự án nhóm 5 người trên Trello và Discord cho bài tập lớn môn Lập trình hướng đối tượng, đảm bảo phân công minh bạch và theo dõi tiến độ theo tuần.",
    process: [
      {
        heading: "1. Thiết lập không gian làm việc",
        body: "Tạo Trello board theo mô hình Kanban: Backlog → To do → In progress → Review → Done. Mỗi thẻ gắn nhãn theo module (UI, Backend, Database, Testing) và gán thành viên phụ trách.",
      },
      {
        heading: "2. Quy tắc giao tiếp",
        body: "Discord chia 4 kênh: #thông-báo, #thảo-luận-kỹ-thuật, #review-code, #ngoài-lề. Quy ước trả lời tin nhắn trong 12 giờ, họp video 30 phút mỗi tối thứ 4.",
      },
      {
        heading: "3. Theo dõi tiến độ",
        body: "Mỗi sprint kéo dài 1 tuần, kết thúc bằng demo nhỏ. Sử dụng Trello Power-Up 'Burndown' để vẽ biểu đồ và phát hiện thẻ tồn đọng. Mọi commit được liên kết với mã thẻ trong tin nhắn commit.",
      },
      {
        heading: "4. Tối ưu quy trình",
        body: "Sau sprint 2, nhóm bổ sung 'Definition of Done' để giảm thẻ phải mở lại, đồng thời dùng GitHub Projects đồng bộ với Trello qua Zapier nhằm tránh trùng lặp công việc.",
      },
    ],
    outcome:
      "Ảnh chụp Trello board từng tuần, biểu đồ burndown, biên bản họp và link repo GitHub có commit liên kết thẻ.",
    reflection:
      "Công cụ chỉ phát huy hiệu quả khi nhóm thống nhất nguyên tắc sử dụng. Việc viết 'Definition of Done' tưởng nhỏ nhưng giảm rõ rệt tranh cãi khi review.",
  },
  {
    id: "bai5",
    shortLabel: "Bài 5",
    title: "Bài 5 — Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    subtitle: "MỤC 5.4 - BÀI 5: SÁNG TẠO NỘI DUNG SỐ ",
    objective:
      "Sản xuất một video ngắn 60 giây giới thiệu ngành Kỹ thuật máy tính UET với sự hỗ trợ của các công cụ AI tạo sinh (ChatGPT, Midjourney, ElevenLabs, CapCut AI).",
    process: [
      {
        heading: "1. Lên ý tưởng và kịch bản",
        body: "Dùng ChatGPT brainstorm 5 hướng tiếp cận, chọn hướng 'một ngày của sinh viên KTMT'. Cải tiến kịch bản qua 3 vòng, mỗi vòng bổ sung mô tả khung hình, lời thoại và nhịp chuyển cảnh.",
      },
      {
        heading: "2. Tạo hình ảnh & b-roll",
        body: "Midjourney v6 sinh 12 ảnh minh họa các khung 'phòng lab', 'giảng đường', 'mạch điện tử', 'code editor'. Chọn 6 ảnh phù hợp, dùng upscale và biến thể để giữ phong cách đồng nhất.",
      },
      {
        heading: "3. Lồng tiếng & nhạc nền",
        body: "ElevenLabs sinh giọng đọc tiếng Việt nam, tốc độ vừa, ngữ điệu thân thiện. Nhạc nền chọn từ thư viện miễn phí YouTube Audio Library, mix âm lượng -18 LUFS.",
      },
      {
        heading: "4. Dựng phim",
        body: "CapCut AI tự động cắt theo nhịp giọng đọc, thêm phụ đề tiếng Việt và hiệu ứng chuyển cảnh nhẹ. Xuất bản video 1080p, kèm thumbnail thiết kế trên Canva.",
      },
    ],
    outcome:
      "Video MP4 60 giây, kịch bản chi tiết, bộ ảnh nguồn, file dự án CapCut và một bài blog ngắn mô tả quy trình.",
    reflection:
      "AI rất mạnh ở khâu nháp nhanh và mở rộng ý tưởng, nhưng quyết định cuối cùng về phong cách, đạo đức và độ chính xác vẫn thuộc về con người.",
  },
  {
    id: "bai6",
    shortLabel: "Bài 6",
    title: "Bài 6 — Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    subtitle: "MỤC 6.4 - BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT TRONG MÔI TRƯỜNG SỐ",
    objective:
      "Xây dựng bộ nguyên tắc cá nhân gồm 7 điều về sử dụng AI có trách nhiệm, dựa trên các nghiên cứu về đạo đức AI và quy định liêm chính học thuật của ĐHQGHN.",
    process: [
      {
        heading: "1. Khảo sát tài liệu",
        body: "Đọc 8 nguồn: hướng dẫn của UNESCO về AI trong giáo dục, chính sách của ĐHQGHN, bài báo về 'AI hallucination', báo cáo của Stanford HAI và 2 case study sinh viên bị kỷ luật vì lạm dụng AI.",
      },
      {
        heading: "2. Xác định rủi ro",
        body: "Phân loại rủi ro theo 4 nhóm: chính xác (sai sự thật), liêm chính (đạo văn AI), riêng tư (lộ dữ liệu nhạy cảm), phụ thuộc (mất kỹ năng tư duy độc lập).",
      },
      {
        heading: "3. Soạn 7 nguyên tắc cá nhân",
        body: "(1) Luôn ghi rõ vai trò AI khi nộp bài. (2) Không dán dữ liệu cá nhân hoặc bí mật vào prompt. (3) Kiểm chứng mọi sự kiện AI đưa ra. (4) Tự viết bản nháp đầu, AI chỉ đóng vai trò biên tập. (5) Tôn trọng bản quyền dữ liệu huấn luyện. (6) Không dùng AI làm bài thi cá nhân. (7) Chia sẻ prompt và rủi ro với bạn học.",
      },
      {
        heading: "4. Đề xuất giải pháp đạo đức",
        body: "Đề xuất với lớp: lập 'AI usage log' đính kèm mỗi báo cáo nhóm để minh bạch hóa mức độ hỗ trợ; tổ chức seminar nhỏ chia sẻ kinh nghiệm sử dụng AI an toàn.",
      },
    ],
    outcome:
      "Tài liệu PDF 'Bộ nguyên tắc AI có trách nhiệm của tôi', bảng phân tích rủi ro và mẫu AI usage log dùng cho dự án nhóm.",
    reflection:
      "Sử dụng AI có trách nhiệm không phải là dùng ít, mà là dùng có suy nghĩ. Khi minh bạch hóa cách dùng, mình vừa bảo vệ bản thân vừa góp phần xây dựng văn hóa học thuật lành mạnh.",
  },
];

const allTabs = [
  { id: "gioi-thieu", label: "Giới thiệu" },
  ...exercises.map((e) => ({ id: e.id, label: e.shortLabel })),
  { id: "tong-ket", label: "Tổng kết" },
];

function Portfolio() {
  const [tab, setTab] = useState("gioi-thieu");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <img
            src={uetLogo}
            alt="Logo Đại học Công nghệ - ĐHQGHN"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-[var(--brand)]/20"
          />
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              VNU · University of Engineering and Technology
            </p>
            <h1 className="text-lg font-semibold text-[var(--brand-deep)]">
              Portfolio Kỹ thuật số
            </h1>
          </div>
        </div>
      </header>

      <section
        className="border-b border-border"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-10 text-primary-foreground">
          <p className="text-sm uppercase tracking-[0.2em] opacity-80">
            Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Hành trình học tập số của sinh viên UET
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base opacity-90">
            {"\n"}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="h-auto w-max min-w-full justify-start gap-1 bg-[var(--brand-soft)] p-1">
              {allTabs.map((t) => (
                <TabsTrigger
                  key={t.id}
                  value={t.id}
                  className="data-[state=active]:bg-[var(--brand)] data-[state=active]:text-primary-foreground px-4 py-2 text-sm"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="gioi-thieu" className="mt-8">
            <IntroPage />
          </TabsContent>

          {exercises.map((ex) => (
            <TabsContent key={ex.id} value={ex.id} className="mt-8">
              {ex.id === "bai1" ? <Bai1Page /> : ex.id === "bai2" ? <Bai2Page /> : ex.id === "bai3" ? <Bai3Page /> : ex.id === "bai4" ? <Bai4Page /> : ex.id === "bai5" ? <Bai5Page /> : ex.id === "bai6" ? <Bai6Page /> : <ExercisePage data={ex} />}
            </TabsContent>
          ))}

          <TabsContent value="tong-ket" className="mt-8">
            <SummaryPage />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Portfolio cá nhân — Đại học Công nghệ, ĐHQGHN.
        </div>
      </footer>
    </div>
  );
}

function IntroPage() {
  return (
    <article className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-2xl border border-border shadow-sm">
          <img
            src={avatar}
            alt="Ảnh chân dung sinh viên"
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">
            Thông tin sinh viên
          </h3>
          <dl className="mt-3 space-y-2 text-sm">
            <Row k="Họ và tên" v="Nguyễn Hoàng Anh" />
            <Row k="Mã sinh viên" v="25020459" />
            <Row k="Trường" v="ĐH Công nghệ — ĐHQGHN" />
            <Row k="Khóa" v="QH-2025 (K70)" />
            <Row k="Ngành" v="Kỹ thuật máy tính" />
            <Row k="Email" v="25020459@vnu.edu.vn" />
          </dl>
        </div>
      </div>

      <div className="space-y-6">
        <header>
          <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
            Trang Giới thiệu
          </p>
          <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
            Xin chào, mình là Nguyễn Hoàng Anh
          </h2>
        </header>

        <section className="prose-section">
          <h3>Đôi nét về bản thân</h3>
          <p>
            Mình là sinh viên năm nhất ngành Kỹ thuật máy tính tại Trường Đại học Công nghệ, ĐHQGHN.{" "}
          </p>
          <p>
            Mình yêu thích phần cứng nhúng, hệ thống nhân tạo và đặc biệt hứng thú với cách phần mềm tương tác với phần cứng để tạo ra những thiết bị thông minh phục vụ đời sống.
          </p>
        </section>

        <section className="prose-section">
          <h3>Kỹ năng cá nhân</h3>
          <ul>
            <li>Vững nền tảng Toán và Lập trình trong năm nhất.</li>
            <li>Thành thạo ngôn ngữ C và Python. </li>
            <li>Có khả năng sử dụng tiếng Anh trong cả cuộc sống và trong chuyên ngành.</li>
            <li>Kinh nghiệm sử dụng các công cụ và làm việc trên môi trường số</li>
          </ul>
        </section>

        <section className="prose-section">
          <h3>Mục tiêu của Portfolio này</h3>
          <ul>
            <li>Thể hiện một cách có hệ thống các kỹ năng số đã học trong môn học.</li>
            <li>Lưu trữ sản phẩm cá nhân ở một nơi duy nhất, dễ truy cập và chia sẻ.</li>
            <li>Là tài liệu tham chiếu khi xin học bổng, thực tập và việc làm trong tương lai.</li>
            <li>Phản chiếu quá trình trưởng thành của bản thân qua từng bài tập thành phần.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/60 pb-1 last:border-none">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium text-foreground">{v}</dd>
    </div>
  );
}

function ExercisePage({ data }: { data: ExerciseContent }) {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          {data.subtitle}
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          {data.title}
        </h2>
      </header>

      <section className="prose-section">
        <h3>1. Mục tiêu bài tập</h3>
        <p>{data.objective}</p>
      </section>

      <section className="prose-section">
        <h3>2. Quá trình thực hiện</h3>
        {data.process.map((p) => (
          <div key={p.heading} className="mt-4">
            <h4>{p.heading}</h4>
            <p>{p.body}</p>
          </div>
        ))}
      </section>

      <section className="prose-section">
        <h3>3. Sản phẩm cuối cùng</h3>
        <p>{data.outcome}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {["PDF báo cáo", "Ảnh chụp minh họa", "Liên kết tài nguyên"].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-dashed border-border bg-[var(--brand-soft)]/40 p-4 text-center text-sm text-muted-foreground"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="prose-section">
        <h3>4. Suy ngẫm cá nhân</h3>
        <p>{data.reflection}</p>
      </section>
    </article>
  );
}

function SummaryPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          Trang Tổng kết
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          {"\n"}
        </h2>
      </header>

      <section className="prose-section">
        <h3>Trải nghiệm cá nhân</h3>
        <p>
          Khi mới nhận đề bài, mình hình dung Portfolio chỉ là việc gom các bài tập lại. Càng làm mình càng nhận ra đây là một bài tập về tư duy hệ thống: từ cách đặt tên tệp, lưu trữ bằng chứng, đến cách kể lại câu chuyện học tập sao cho người đọc có thể dễ dàng hiểu được. Quá trình này giúp mình hiểu rằng học tập không chỉ là tiếp thu lý thuyết, mà là cách chúng ta đóng gói, trình bày và chuyển hóa kiến thức đó thành những sản phẩm thực tế có giá trị chia sẻ.
        </p>
      </section>

      <section className="prose-section">
        <h3>Những kiến thức và kỹ năng quan trọng nhất</h3>
        <ul>
          <li>
            <strong>Quản lý dữ liệu cá nhân:</strong> đặt tên, phân loại và sao lưu
            theo quy tắc 3-2-1 đã trở thành thói quen hàng ngày.
          </li>
          <li>
            <strong>Tìm kiếm và đánh giá thông tin:</strong> các toán tử nâng cao và
            bộ tiêu chí CRAAP giúp mình lọc nguồn nhanh và đáng tin hơn.
          </li>
          <li>
            <strong>Làm việc với AI:</strong> viết prompt theo cấu trúc Role-Context-
            Task-Format-Constraint và luôn kiểm chứng đầu ra.
          </li>
          <li>
            <strong>Hợp tác trực tuyến:</strong> dùng Trello, Discord, GitHub
            Projects một cách có nguyên tắc để nhóm chạy mượt.
          </li>
          <li>
            <strong>Đạo đức số:</strong> minh bạch hóa mức độ sử dụng AI và bảo vệ
            dữ liệu cá nhân là phần không tách rời của năng lực số.
          </li>
        </ul>
      </section>

      <section className="prose-section">
        <h3>Điều tâm đắc và thách thức</h3>
        <p>
          Phần mình tâm đắc nhất là việc hoàn thiện chính trang Portfolio này. Việc có một không gian số riêng để lưu trữ dự án cá nhân giúp mình tự tin hơn khi chia sẻ năng lực của mình với thầy cô và bạn bè. Mình cũng rất thích bài tập dự án giữa kỳ của môn học, vì dự án đã giúp mình hiểu được cách biên tập nội dung với sự trợ giúp của AI.
        </p>
        <p>
          Thách thức lớn nhất là quản lý thời gian và sắp xếp dữ liệu: việc gom toàn bộ sản phẩm, file PDF, video từ các bài tập trước đó và tóm tắt lại quy trình thực hiện tốn khá nhiều thời gian. Đồng thời, thiết kế giao diện làm sao để Portfolio vừa khoa học, dễ theo dõi nhưng vẫn đảm bảo tính thẩm mỹ cũng là một vấn đề khó trong dự án này.
        </p>
      </section>

      <section className="prose-section">
        <h3>{"\n"}</h3>
        <p>
          {"\n"}
        </p>
      </section>
    </article>
  );
}

function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <img src={src} alt={alt} className="w-full h-auto object-contain" loading="lazy" />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground italic text-center">{alt}</figcaption>
    </figure>
  );
}

function Bai1Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          MỤC 1.4 - BÀI 1: MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI Ơ
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Bài 1 — Thao tác cơ bản với tệp tin và thư mục
        </h2>
      </header>

      <section className="prose-section">
        <h3>Thực hiện</h3>

        <h4>1. Mở File Explorer</h4>
        <p>Nhấn tổ hợp phím <strong>Windows + E</strong> hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.</p>
        <Figure src={bai1s1} alt="Thanh tìm kiếm với biểu tượng thư mục File Explorer" />

        <h4>2. Truy cập ổ đĩa / thư mục</h4>
        <p>Ở cột bên trái, nhấp vào <strong>This PC</strong>, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ ổ D: hoặc E:). Nếu máy chỉ có ổ C:, hãy vào thư mục <strong>Documents</strong>.</p>
        <Figure src={bai1s2} alt="Khung điều hướng File Explorer hiển thị các ổ đĩa" />

        <h4>3. Tạo thư mục mới</h4>
        <p>Nhấp chuột phải vào khoảng trống → chọn <strong>New → Folder</strong>. Đặt tên thư mục là <code>ThucHanh_hotensinhvien</code> (ví dụ <code>ThucHanh_NguyenHoangAnh</code>). Nhấn <strong>Enter</strong>.</p>
        <Figure src={bai1s3} alt="Menu ngữ cảnh và danh sách tệp khi tạo thư mục mới" />

        <h4>4. Vào thư mục vừa tạo</h4>
        <p>Nhấp đúp vào thư mục <code>ThucHanh_NguyenHoangAnh</code>.</p>
        <Figure src={bai1s4} alt="Cửa sổ File Explorer hiển thị thư mục trống ThucHanh_NguyenHoangAnh" />

        <h4>5. Tạo tệp tin văn bản</h4>
        <p>Nhấp chuột phải vào khoảng trống → <strong>New → Text Document</strong>. Đặt tên là <code>GhiChu.txt</code>. Nhấn <strong>Enter</strong>.</p>
        <Figure src={bai1s5} alt="Menu ngữ cảnh hiển thị tùy chọn tạo Text Document" />
        <div className="my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-[var(--brand-soft)]">
              <tr><th className="px-3 py-2 text-left">Name</th><th className="px-3 py-2 text-left">Date modified</th><th className="px-3 py-2 text-left">Type</th><th className="px-3 py-2 text-left">Size</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-border"><td className="px-3 py-2">GhiChu</td><td className="px-3 py-2">3/8/2026 4:13 PM</td><td className="px-3 py-2">Text Document</td><td className="px-3 py-2">0 KB</td></tr>
            </tbody>
          </table>
        </div>

        <h4>6. Đổi tên tệp tin</h4>
        <p>Nhấp chuột phải vào tệp <code>GhiChu.txt</code> → chọn <strong>Rename</strong>. Đổi tên thành <code>GhiChuQuanTrong.txt</code>. Nhấn <strong>Enter</strong>.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Figure src={bai1s6a} alt="Menu Rename trong File Explorer" />
          <Figure src={bai1s6b} alt="Tệp sau khi đổi tên thành GhiChuQuanTrong" />
        </div>

        <h4>7. Tạo thư mục con</h4>
        <p>Trong thư mục <code>ThucHanh_NguyenHoangAnh</code>, nhấp chuột phải → <strong>New → Folder</strong>. Đặt tên là <code>TaiLieu</code>.</p>
        <Figure src={bai1s7} alt="Tạo thư mục con TaiLieu" />

        <h4>8. Sao chép tệp tin (Copy &amp; Paste)</h4>
        <ul>
          <li>Nhấp chuột phải vào tệp <code>GhiChuQuanTrong.txt</code> → chọn <strong>Copy</strong> (hoặc <strong>Ctrl + C</strong>).</li>
          <li>Nhấp đúp vào thư mục <code>TaiLieu</code>, nhấp chuột phải vào khoảng trống bên trong → chọn <strong>Paste</strong> (hoặc <strong>Ctrl + V</strong>). Bây giờ bạn có một bản sao của tệp trong thư mục <code>TaiLieu</code>.</li>
        </ul>
        <Figure src={bai1s8a} alt="Menu ngữ cảnh với các tùy chọn Cut, Copy, Rename, Share, Delete" />
        <Figure src={bai1s8b} alt="Thư mục TaiLieu bên trong ThucHanh_NguyenHoangAnh" />
        <Figure src={bai1s8c} alt="Menu Paste và tệp GhiChuQuanTrong xuất hiện trong TaiLieu" />

        <h4>9. Di chuyển tệp tin (Cut &amp; Paste)</h4>
        <ul>
          <li>Quay lại thư mục <code>ThucHanh_NguyenHoangAnh</code>. Tạo một tệp mới tên là <code>DiChuyen.txt</code>.</li>
          <li>Nhấp chuột phải vào tệp <code>DiChuyen.txt</code> → chọn <strong>Cut</strong> (hoặc <strong>Ctrl + X</strong>).</li>
          <li>Nhấp đúp vào thư mục <code>TaiLieu</code>, nhấp chuột phải vào khoảng trống → chọn <strong>Paste</strong> (hoặc <strong>Ctrl + V</strong>). Tệp gốc đã biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.</li>
        </ul>
        <Figure src={bai1s9a} alt="File Explorer hiển thị TaiLieu, GhiChuQuanTrong và DiChuyen" />
        <Figure src={bai1s9b} alt="Menu Cut cho tệp DiChuyen" />
        <Figure src={bai1s9c} alt="Kết quả sau khi Paste DiChuyen vào TaiLieu" />

        <h4>10. Xóa tệp tin</h4>
        <p>Trong thư mục <code>TaiLieu</code>, nhấp chuột phải vào tệp <code>GhiChuQuanTrong.txt</code> → chọn <strong>Delete</strong>. Tệp sẽ được chuyển vào <strong>Thùng rác (Recycle Bin)</strong>.</p>
        <Figure src={bai1s10} alt="Xóa tệp GhiChuQuanTrong vào Thùng rác" />

        <h4>11. Xóa vĩnh viễn</h4>
        <p>Chọn tệp <code>DiChuyen.txt</code>, nhấn giữ phím <strong>Shift</strong> và nhấn phím <strong>Delete</strong>. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.</p>
        <p className="text-sm text-muted-foreground">Đường dẫn: <code>This PC &gt; New Volume (D:) &gt; New folder &gt; ThucHanh_NguyenHoangAnh</code></p>
        <div className="my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-[var(--brand-soft)]">
              <tr><th className="px-3 py-2 text-left">Name</th><th className="px-3 py-2 text-left">Date modified</th><th className="px-3 py-2 text-left">Type</th><th className="px-3 py-2 text-left">Size</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-border"><td className="px-3 py-2">TaiLieu</td><td className="px-3 py-2">3/8/2026 4:23 PM</td><td className="px-3 py-2">File folder</td><td className="px-3 py-2"></td></tr>
              <tr className="border-t border-border"><td className="px-3 py-2">GhiChuQuanTrong</td><td className="px-3 py-2">3/8/2026 4:13 PM</td><td className="px-3 py-2">Text Document</td><td className="px-3 py-2">0 KB</td></tr>
            </tbody>
          </table>
        </div>
        <Figure src={bai1s11a} alt="Danh sách tệp trong thư mục ThucHanh_NguyenHoangAnh" />
        <Figure src={bai1s11b} alt="Thùng rác (Recycle Bin) hiển thị GhiChuQuanTrong đã xóa" />
        <Figure src={bai1s11c} alt="Hộp thoại Delete File xác nhận xóa tệp DiChuyen" />

        <h4>12. Khôi phục từ Thùng rác (tùy chọn)</h4>
        <p>Tìm biểu tượng <strong>Recycle Bin</strong> trên màn hình nền, nhấp đúp để mở. Tìm tệp <code>GhiChuQuanTrong.txt</code> đã xóa, nhấp chuột phải vào nó và chọn <strong>Restore</strong>. Tệp sẽ quay trở lại vị trí ban đầu.</p>
        <Figure src={bai1s12} alt="Menu ngữ cảnh và cửa sổ File Explorer khi khôi phục tệp từ Recycle Bin" />
      </section>
    </article>
  );
}

type SourceRow = {
  stt: number;
  title: string;
  authors: string;
  type: string;
  criteria: { label: string; value: string }[];
  reliability: "Rất Cao" | "Cao" | "Khá" | "Trung bình" | "Thấp";
  strengths: string;
  weaknesses: string;
};

const bai2Sources: SourceRow[] = [
  {
    stt: 1,
    title: "AI in Education: Promises and Implications for Teaching and Learning",
    authors: "Chen et al., 2020",
    type: "Bài báo khoa học",
    criteria: [
      { label: "Tác giả", value: "Chuyên gia từ ĐH uy tín" },
      { label: "NXB", value: "Tạp chí chuẩn Q1" },
      { label: "PPNC", value: "Systematic review" },
      { label: "Cập nhật", value: "Không quá cũ (2020)" },
    ],
    reliability: "Cao",
    strengths:
      "Phương pháp nghiên cứu là tổng quan hệ thống nên mang lại cái nhìn toàn diện. Số lượng trích dẫn rất cao chứng tỏ giá trị tham khảo lớn.",
    weaknesses:
      "Xuất bản năm 2020, nghĩa là dữ liệu thu thập có thể từ 2018-2019 (trước khi có sự bùng nổ của các AI như ChatGPT). Do đó, một số công nghệ được nhắc đến có thể đã lỗi thời.",
  },
  {
    stt: 2,
    title: "Artificial Intelligence in Higher Education: The State of the Field",
    authors: "Zawacki-Richter et al., 2019",
    type: "Bài báo khoa học",
    criteria: [
      { label: "Tác giả", value: "Các nhà nghiên cứu EdTech hàng đầu" },
      { label: "NXB", value: "Int J Educ Technol High Educ" },
      { label: "PPNC", value: "Systematic review" },
      { label: "Trích dẫn", value: "Rất cao" },
      { label: "Cập nhật", value: "Hơi cũ nhưng mang tính nền tảng" },
    ],
    reliability: "Cao",
    strengths:
      "Đây là một trong những bài báo nền tảng thường xuyên được trích dẫn nhất khi nghiên cứu về AI trong giáo dục đại học. Tác giả là những chuyên gia hàng đầu về EdTech. Đánh giá rất kỹ lưỡng về thực trạng áp dụng AI.",
    weaknesses:
      "Tính cập nhật không cao và thiên về phân tích bối cảnh lịch sử và nền tảng hơn là các ứng dụng AI hiện đại (2023-2024).",
  },
  {
    stt: 3,
    title: "Personalized Learning through AI",
    authors: "Holmes & Tuomi, 2022",
    type: "Bài báo khoa học",
    criteria: [
      { label: "Tác giả", value: "Giáo sư về AI và học tập" },
      { label: "NXB", value: "NXB học thuật" },
      { label: "PPNC", value: "Nghiên cứu thực nghiệm" },
      { label: "Trích dẫn", value: "Tăng nhanh" },
      { label: "Cập nhật", value: "Rất mới (2022)" },
    ],
    reliability: "Cao",
    strengths:
      "Bài báo cập nhật và sát với thời điểm thực tế. Tác giả Wayne Holmes là một tên tuổi cực kỳ lớn trong lĩnh vực Trí tuệ nhân tạo trong giáo dục.",
    weaknesses:
      "Đòi hỏi người đọc phải có kiến thức nền tảng tốt để đọc vì tính lý thuyết cao.",
  },
  {
    stt: 4,
    title: "Ethical implications of AI in universities",
    authors: "Bostrom, 2021",
    type: "Bài báo khoa học",
    criteria: [
      { label: "Tác giả", value: "Triết gia và nhà nghiên cứu AI" },
      { label: "NXB", value: "Tạp chí Ethics & Info Tech" },
      { label: "PPNC", value: "Phân tích lý thuyết sâu sắc" },
      { label: "Trích dẫn", value: "Ổn định" },
      { label: "Cập nhật", value: "Mới (2021)" },
    ],
    reliability: "Cao",
    strengths:
      "Nick Bostrom là một triết gia nổi tiếng thế giới về rủi ro của AI. Do đó, bài viết cung cấp một góc nhìn quan trọng thường bị bỏ quên: Đạo đức trong việc áp dụng AI.",
    weaknesses:
      "Là một bài báo thiên về triết học và lý thuyết đạo đức, không có dữ liệu thực nghiệm về hiệu quả giảng dạy.",
  },
  {
    stt: 5,
    title: "Chatbots in University admissions",
    authors: "Smith & Jones, 2023",
    type: "Bài báo khoa học",
    criteria: [
      { label: "Tác giả", value: "Nghiên cứu sinh" },
      { label: "NXB", value: "Conference paper IEEE" },
      { label: "PPNC", value: "Khảo sát định lượng" },
      { label: "Trích dẫn", value: "Còn ít (do mới xuất bản)" },
      { label: "Cập nhật", value: "Rất mới (2023)" },
    ],
    reliability: "Khá",
    strengths:
      "Bài viết rất sát với thời điểm thực tế. Giải quyết một ứng dụng rất cụ thể và thực tiễn (tuyển sinh bằng Chatbot).",
    weaknesses:
      "Conference paper sẽ có quá trình peer-review ít khắt khe hơn so với xuất bản qua tạp chí. Đồng thời, do mới xuất bản nên chưa có nhiều trích dẫn để khẳng định độ uy tín.",
  },
  {
    stt: 6,
    title: "Artificial Intelligence in Education",
    authors: "Holmes et al., 2019",
    type: "Sách chuyên khảo",
    criteria: [
      { label: "Tác giả", value: "Đội ngũ chuyên gia từ ĐH College London" },
      { label: "NXB", value: "Springer (rất uy tín)" },
      { label: "Cập nhật", value: "Phù hợp làm tài liệu nền tảng" },
    ],
    reliability: "Cao",
    strengths:
      "Sách được xuất bản bởi các chuyên gia từ University College London (UCL) — một trong những trường đào tạo sư phạm hàng đầu thế giới.",
    weaknesses:
      "Sách mất nhiều thời gian để viết và xuất bản, nên tính cập nhật về mặt công nghệ cốt lõi sẽ không cao.",
  },
  {
    stt: 7,
    title: "Teaching in the Age of AI",
    authors: "Baker, 2021",
    type: "Sách chuyên khảo",
    criteria: [
      { label: "Tác giả", value: "Chuyên gia giáo dục độc lập" },
      { label: "NXB", value: "Tự xuất bản" },
      { label: "Cập nhật", value: "Mới nhưng chưa qua peer-review" },
    ],
    reliability: "Trung bình",
    strengths:
      "Văn phong dễ hiểu, mang tính ứng dụng cao, đưa ra nhiều lời khuyên thực tế cho giảng viên và sinh viên.",
    weaknesses:
      "Đây là sách tự xuất bản nên độ chuẩn xác khoa học của các tuyên bố trong sách chưa được kiểm chứng độc lập.",
  },
  {
    stt: 8,
    title: "AI and Education: Guidance for policy-makers",
    authors: "UNESCO, 2021",
    type: "Báo cáo tổ chức",
    criteria: [
      { label: "Tác giả/Cơ quan", value: "UNESCO (Tổ chức quốc tế uy tín)" },
      { label: "PPNC", value: "Dựa trên tham vấn toàn cầu" },
      { label: "Cập nhật", value: "Mới" },
    ],
    reliability: "Rất Cao",
    strengths:
      "Nguồn tài liệu cấp vĩ mô vô giá. UNESCO cung cấp cái nhìn toàn cầu, có tính định hướng và chiến lược cao, bao gồm cả các vấn đề về công bằng số và khoảng cách số.",
    weaknesses:
      "Tài liệu hướng tới các nhà hoạch định chính sách (chính phủ, hiệu trưởng), do đó có thể thiếu các hướng dẫn cụ thể ở cấp độ vi mô (ví dụ: cách dùng AI để giải một bài toán lập trình cho sinh viên).",
  },
  {
    stt: 9,
    title: "EDUCAUSE Horizon Report: Teaching and Learning Edition",
    authors: "Pelletier et al., 2022",
    type: "Báo cáo tổ chức",
    criteria: [
      { label: "Cơ quan", value: "EDUCAUSE (Hiệp hội uy tín về IT trong giáo dục)" },
      { label: "PPNC", value: "Bầu chọn từ hội đồng chuyên gia (Delphi method)" },
      { label: "Cập nhật", value: "Rất tốt" },
    ],
    reliability: "Cao",
    strengths:
      "Phương pháp thu thập dữ liệu dựa trên sự đồng thuận của hội đồng chuyên gia toàn cầu.",
    weaknesses:
      "Đây là báo cáo dự báo xu hướng tổng hợp nhiều công nghệ (không chỉ riêng AI), nên thời lượng phân tích sâu về cơ chế hoạt động của AI sẽ bị hạn chế.",
  },
  {
    stt: 10,
    title: "5 ways AI will change college",
    authors: "EdTech Magazine, 2023",
    type: "Nguồn mở (Internet)",
    criteria: [
      { label: "Tác giả", value: "Phóng viên công nghệ" },
      { label: "Cơ quan", value: "Tạp chí mạng" },
      { label: "PPNC", value: "Tổng hợp tin tức, không có nghiên cứu gốc" },
      { label: "Cập nhật", value: "Rất mới nhưng thiếu tính hàn lâm" },
    ],
    reliability: "Thấp",
    strengths:
      "Thông tin mang tính thời sự, hình thức trình bày trực quan, dễ đọc, dễ tiếp cận.",
    weaknesses:
      "Không phải là tài liệu học thuật. Không có phương pháp nghiên cứu (thường là ý kiến cá nhân của nhà báo hoặc tổng hợp tin tức). Không nên dùng làm luận cứ chính để chứng minh một luận điểm khoa học trong báo cáo.",
  },
];

const reliabilityStyle: Record<SourceRow["reliability"], string> = {
  "Rất Cao": "bg-emerald-100 text-emerald-800 border-emerald-300",
  "Cao": "bg-green-100 text-green-800 border-green-300",
  "Khá": "bg-blue-100 text-blue-800 border-blue-300",
  "Trung bình": "bg-amber-100 text-amber-800 border-amber-300",
  "Thấp": "bg-red-100 text-red-800 border-red-300",
};

const bai2References: string[] = [
  "Baker, T., 2021. Teaching in the Age of AI. 1st ed. New York: Independent Publishing.",
  "Bostrom, N., 2021. Ethical implications of AI in universities. Ethics and Information Technology, 23(2), pp.145-158.",
  "Chen, L., Chen, P. and Lin, Z., 2020. Artificial Intelligence in Education: A Review. IEEE Access, 8, pp.75264-75278.",
  "EdTech Magazine, 2023. 5 ways AI will change college. [online] Available at: https://www.edtechmagazine.com/example-link [Truy cập ngày 21 Tháng 3 năm 2026].",
  "Holmes, W., Bialik, M. and Fadel, C., 2019. Artificial Intelligence in Education: Promises and Implications for Teaching and Learning. Boston: Center for Curriculum Redesign.",
  "Holmes, W. and Tuomi, I., 2022. State of the art and practice in AI in education. European Journal of Education, 57(4), pp.542-570.",
  "Pelletier, K., McCormack, M., Reeves, J., Robert, J. and Arbino, N., 2022. 2022 EDUCAUSE Horizon Report: Teaching and Learning Edition. Boulder, CO: EDUCAUSE.",
  "Smith, J. and Jones, M., 2023. Chatbots in University admissions: A student perspective. 2023 IEEE International Conference on Engineering, Technology and Education (TALE), pp.112-118.",
  "UNESCO, 2021. AI and education: guidance for policy-makers. Paris: UNESCO Publishing.",
  "Zawacki-Richter, O., Marín, V.I., Bond, M. and Gouverneur, F., 2019. Systematic review of research on artificial intelligence applications in higher education – where are the educators?. International Journal of Educational Technology in Higher Education, 16(1), p.39.",
];

function Bai2Page() {
  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          MỤC 2.4 - BÀI 2: KHAI THÁC DỮ LIỆU VÀ THÔNG TIN
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Bài 2 — Tìm kiếm và đánh giá thông tin học thuật
        </h2>
        <p className="mt-3 text-base text-foreground">
          {"\n"}
        </p>
        <div className="mt-2 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
          <p>{"\n"}</p>
          <p>{"\n"}</p>
        </div>
      </header>

      <section className="prose-section">
        <h3>Đánh giá độ tin cậy của các nguồn thông tin</h3>
        <p className="text-sm text-muted-foreground">
          Mười nguồn tài liệu được đánh giá dựa trên 5 tiêu chí: Tác giả, Nhà xuất bản,
          Phương pháp nghiên cứu (PPNC), Trích dẫn và Tính cập nhật.
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[var(--brand-soft)] text-[var(--brand-deep)]">
              <tr>
                <th className="border border-border px-3 py-2 text-left font-semibold w-12">STT</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Tên tài liệu / Tác giả</th>
                <th className="border border-border px-3 py-2 text-left font-semibold w-36">Loại nguồn</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Đánh giá tóm tắt (Dựa trên 5 tiêu chí)</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Xếp hạng độ tin cậy</th>
              </tr>
            </thead>
            <tbody>
              {bai2Sources.map((s) => (
                <tr key={s.stt} className="align-top">
                  <td className="border border-border px-3 py-3 font-semibold text-[var(--brand-deep)]">{s.stt}</td>
                  <td className="border border-border px-3 py-3">
                    <p className="m-0 font-medium text-foreground">{s.title}</p>
                    <p className="m-0 mt-1 text-xs text-muted-foreground">({s.authors})</p>
                  </td>
                  <td className="border border-border px-3 py-3 text-foreground">{s.type}</td>
                  <td className="border border-border px-3 py-3">
                    <ul className="m-0 list-none space-y-1.5 p-0">
                      {s.criteria.map((c) => (
                        <li key={c.label} className="leading-snug">
                          <strong className="text-foreground">{c.label}:</strong>{" "}
                          <span className="text-foreground">{c.value}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-border px-3 py-3">
                    <p className="m-0">
                      <strong className="text-foreground">Độ tin cậy:</strong>{" "}
                      <span className={`inline-block rounded-full border px-2 py-0.5 text-xs font-semibold ${reliabilityStyle[s.reliability]}`}>
                        {s.reliability}
                      </span>
                    </p>
                    <p className="m-0 mt-2 leading-snug">
                      <strong className="text-foreground">Điểm mạnh:</strong> {s.strengths}
                    </p>
                    <p className="m-0 mt-2 leading-snug">
                      <strong className="text-foreground">Điểm yếu:</strong> {s.weaknesses}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="prose-section">
        <h3>Danh mục tài liệu tham khảo (Định dạng Harvard)</h3>
        <ol className="space-y-2 text-sm leading-relaxed">
          {bai2References.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}

// ============== Bài 3 ==============
import bai3Pdf from "@/assets/bai3.pdf.asset.json";

type PromptLevel = { level: "Cơ bản" | "Cải tiến" | "Nâng cao"; prompt: string; feature: string };
type Bai3Task = { id: string; title: string; subject: string; rows: PromptLevel[] };

const bai3Tasks: Bai3Task[] = [
  {
    id: "tv1",
    title: "Tác vụ 1: Tóm tắt bài đọc / tài liệu học thuật",
    subject:
      'Chủ đề giả định: Bài báo nghiên cứu về tác động của Trí tuệ nhân tạo (AI) đối với khoa học kỹ thuật — "The Importance of Artificial Intelligence (AI) Tools in the Modern Science, Engineering and Technological Research and Innovations: A Review" (nhiều tác giả).',
    rows: [
      {
        level: "Cơ bản",
        prompt: '"Tóm tắt bài viết về AI và khoa học kỹ thuật này cho tôi."',
        feature: "Ngắn gọn, chung chung, AI tự quyết định độ dài và định dạng tóm tắt.",
      },
      {
        level: "Cải tiến",
        prompt:
          '"Hãy tóm tắt bài báo về tác động của AI đối với khoa học kỹ thuật dưới đây trong khoảng 300 từ. Sử dụng các đầu mục (bullet points) để nêu bật 5 phát hiện chính."',
        feature: "Có cấu trúc rõ ràng, quy định được dung lượng (300 từ) và định dạng đầu ra (đầu mục).",
      },
      {
        level: "Nâng cao",
        prompt:
          '"Bạn là một nhà nghiên cứu khoa học công nghệ. Hãy đọc văn bản dưới đây và thực hiện: (1) Tóm tắt ý tưởng cốt lõi về vai trò của AI trong nghiên cứu khoa học bằng 1 câu duy nhất. (2) Liệt kê 3 đột phá kỹ thuật quan trọng nhất nhờ AI được đề cập trong bài. (3) Đưa ra góc nhìn phản biện về những rủi ro hoặc thách thức công nghệ của vấn đề này. Trình bày theo phong cách học thuật khách quan."',
        feature:
          "Role prompting (Nhà nghiên cứu), Chain-of-thought (chia nhỏ các bước phân tích), yêu cầu góc nhìn phản biện đa chiều.",
      },
    ],
  },
  {
    id: "tv2",
    title: "Tác vụ 2: Giải thích một khái niệm phức tạp",
    subject: "Khái niệm: Kinh tế thị trường.",
    rows: [
      {
        level: "Cơ bản",
        prompt: '"Kinh tế thị trường là gì?"',
        feature: "Câu hỏi mở, dễ dẫn đến định nghĩa khô khan như trong sách giáo khoa.",
      },
      {
        level: "Cải tiến",
        prompt:
          '"Giải thích khái niệm kinh tế thị trường cho một học sinh trung học phổ thông. Hãy đưa ra các ví dụ minh họa thực tế về quy luật cung và cầu để làm rõ khái niệm."',
        feature: "Xác định rõ đối tượng tiếp nhận (học sinh THPT) để điều chỉnh giọng văn và yêu cầu kết hợp ví dụ thực tế.",
      },
      {
        level: "Nâng cao",
        prompt:
          '"Hãy giải thích khái niệm kinh tế thị trường bằng kỹ thuật Feynman (giải thích cho một đứa trẻ 10 tuổi). Sử dụng phép ẩn dụ liên quan đến một khu chợ bán đồ chơi, nơi người mua và người bán tự thương lượng giá cả mà không có ai ép buộc. Sau đó, hãy tóm tắt lại bằng ngôn ngữ chuyên môn của một nhà kinh tế học để người đọc đối chiếu."',
        feature:
          "Few-shot / Technique-based (áp dụng kỹ thuật Feynman), sử dụng phép ẩn dụ cụ thể (khu chợ đồ chơi) và đối chiếu đa phong cách.",
      },
    ],
  },
  {
    id: "tv3",
    title: "Tác vụ 3: Tạo bộ câu hỏi ôn tập cho một chủ đề",
    subject: "Chủ đề: Lịch sử triều đại nhà Nguyễn.",
    rows: [
      {
        level: "Cơ bản",
        prompt: '"Tạo cho tôi 5 câu hỏi ôn tập về lịch sử nhà Nguyễn."',
        feature: "Kết quả trả về ngẫu nhiên, có thể là câu hỏi tự luận hoặc trắc nghiệm, không kiểm soát được độ khó.",
      },
      {
        level: "Cải tiến",
        prompt:
          '"Tạo 5 câu hỏi trắc nghiệm về những chính sách nội trị và ngoại giao của vua Minh Mạng thời Nguyễn. Mỗi câu hỏi kèm theo 4 lựa chọn (A, B, C, D) và đánh dấu đáp án đúng."',
        feature: "Thu hẹp phạm vi nội dung (thời vua Minh Mạng) và quy định rõ cấu trúc bài tập trắc nghiệm.",
      },
      {
        level: "Nâng cao",
        prompt:
          '"Bạn là một giáo viên Lịch sử cấp 3. Dựa trên nội dung về triều đại nhà Nguyễn, hãy tạo 5 câu hỏi trắc nghiệm phân hóa độ khó: 2 câu nhận biết (về các đời vua hoặc mốc thời gian sự kiện), 2 câu thông hiểu (về nguyên nhân/kết quả của các chính sách) và 1 câu vận dụng cao (đánh giá đa chiều về công và tội). Định dạng bắt buộc: [Câu hỏi] → [4 Lựa chọn] → [Đáp án] → [Giải thích chi tiết bối cảnh lịch sử cho đáp án đó]."',
        feature:
          "Role prompting (Giáo viên Lịch sử), phân loại cấp độ nhận thức rõ ràng (nhận biết, thông hiểu, vận dụng) và buộc AI phải giải thích logic lịch sử cho mỗi đáp án.",
      },
    ],
  },
];

const levelStyle: Record<PromptLevel["level"], string> = {
  "Cơ bản": "bg-slate-100 text-slate-800 border-slate-300",
  "Cải tiến": "bg-blue-100 text-blue-800 border-blue-300",
  "Nâng cao": "bg-emerald-100 text-emerald-800 border-emerald-300",
};

const bai3Principles: { title: string; body: string }[] = [
  {
    title: "Tính cụ thể và rõ ràng",
    body: "Thay vì những câu lệnh chung chung, hãy chỉ định rõ dung lượng, định dạng và trọng tâm.",
  },
  {
    title: "Thêm Context",
    body: "Việc bổ sung đối tượng mục tiêu giúp AI tự động điều chỉnh từ vựng, văn phong và mức độ phức tạp cho phù hợp.",
  },
  {
    title: "Role Prompting",
    body: "Bằng cách gán một định danh cụ thể, AI sẽ kích hoạt các tập dữ liệu liên quan đến chuyên môn và phong cách sư phạm của vai trò đó, giúp câu trả lời chuyên sâu và đáng tin cậy hơn.",
  },
  {
    title: "Thêm Chain-of-Thought",
    body: "Đối với các tác vụ phức tạp, hãy chia nhỏ yêu cầu thành nhiều bước thay vì yêu cầu kết quả cuối cùng ngay lập tức. Điều này giúp AI duy trì luồng tư duy logic và hạn chế việc bịa đặt thông tin (hallucination).",
  },
];

const bai3Tips: { title: string; body: string }[] = [
  {
    title: "Sử dụng kỹ thuật Few-shot Prompting",
    body: "Cung cấp cho AI 1–2 ví dụ mẫu ngay trong prompt vì AI có khả năng bắt chước cấu trúc (pattern) cực kỳ tốt.",
  },
  {
    title: "Xác định rõ những điều KHÔNG nên làm",
    body: "Đôi khi, việc nói cho AI biết cần tránh điều gì cũng không kém phần quan trọng so với việc nói cần làm gì.",
  },
  {
    title: "Quy định cấu trúc đầu ra",
    body: 'Luôn kết thúc prompt nâng cao bằng cách chỉ định định dạng bạn mong muốn. Ví dụ: "Trình bày dưới dạng bảng so sánh", "Định dạng bằng Markdown", hoặc "[Câu hỏi] → [Đáp án] → [Giải thích]".',
  },
  {
    title: "Tinh chỉnh liên tục",
    body: "Hiếm khi bạn có được một prompt hoàn hảo ngay từ lần đầu tiên. Hãy xem việc viết prompt là một cuộc đối thoại: chạy thử → đánh giá kết quả → tìm ra điểm thiếu sót → bổ sung vào prompt và chạy lại.",
  },
];

function Bai3Page() {
  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          MỤC 3.4 - BÀI 3: TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Bài 3 — Viết Prompt hiệu quả cho các tác vụ học tập
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground">
          {"\n"}
        </p>
      </header>

      {bai3Tasks.map((task) => (
        <section key={task.id} className="prose-section">
          <h3>{task.title}</h3>
          <p className="text-sm text-muted-foreground">{task.subject}</p>

          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-[var(--brand-soft)] text-[var(--brand-deep)]">
                <tr>
                  <th className="border border-border px-3 py-2 text-left font-semibold w-32">Cấp độ</th>
                  <th className="border border-border px-3 py-2 text-left font-semibold">Nội dung Prompt</th>
                  <th className="border border-border px-3 py-2 text-left font-semibold w-72">Đặc điểm</th>
                </tr>
              </thead>
              <tbody>
                {task.rows.map((r) => (
                  <tr key={r.level} className="align-top">
                    <td className="border border-border px-3 py-3">
                      <span
                        className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${levelStyle[r.level]}`}
                      >
                        {r.level}
                      </span>
                    </td>
                    <td className="border border-border px-3 py-3 leading-relaxed text-foreground">
                      {r.prompt}
                    </td>
                    <td className="border border-border px-3 py-3 leading-relaxed text-foreground">
                      {r.feature}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="rounded-lg border-l-4 border-[var(--brand)] bg-[var(--brand-soft)] p-4">
        <p className="m-0 text-sm leading-relaxed text-foreground">
          <strong className="text-[var(--brand-deep)]">Kết quả thử nghiệm:</strong> các prompt nâng cao cho kết
          quả chính xác, chi tiết và khớp với yêu cầu hơn các prompt cơ bản.
        </p>
      </section>

      <section className="prose-section">
        <h3>Tổng kết</h3>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h4 className="m-0 text-lg font-semibold text-[var(--brand-deep)]">1. Các nguyên tắc</h4>
            <ul className="mt-3 space-y-3 text-sm">
              {bai3Principles.map((p) => (
                <li key={p.title} className="leading-relaxed">
                  <strong className="text-foreground">{p.title}:</strong>{" "}
                  <span className="text-foreground">{p.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h4 className="m-0 text-lg font-semibold text-[var(--brand-deep)]">
              2. Các mẹo sử dụng AI
            </h4>
            <ul className="mt-3 space-y-3 text-sm">
              {bai3Tips.map((t) => (
                <li key={t.title} className="leading-relaxed">
                  <strong className="text-foreground">{t.title}:</strong>{" "}
                  <span className="text-foreground">{t.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}

import bai4Pdf from "@/assets/bai4.pdf.asset.json";
import bai4Trello from "@/assets/bai4/trello.png.asset.json";
import bai4Docs1 from "@/assets/bai4/docs1.png.asset.json";
import bai4Docs2 from "@/assets/bai4/docs2.png.asset.json";
import bai4Drive from "@/assets/bai4/drive.png.asset.json";
import bai4Messenger from "@/assets/bai4/messenger.png.asset.json";

type ToolBlock = {
  id: string;
  name: string;
  bullets: string[];
  images: { src: string; alt: string }[];
  pros: string[];
  cons: string[];
};

const bai4Tools: ToolBlock[] = [
  {
    id: "trello",
    name: "1. Trello",
    bullets: [
      "Chia các giai đoạn của dự án thành các đầu việc: Content → Slide → Thuyết trình.",
      "Trong các đầu việc, có các nhiệm vụ nhỏ và có deadline cho từng nhiệm vụ.",
      "Giám sát tiến độ hoàn thành bằng dấu tích trên bảng Trello kết hợp giám sát nội dung trên Google Docs.",
    ],
    images: [{ src: bai4Trello.url, alt: "Bảng Trello quản lý dự án" }],
    pros: [
      "Giao diện trực quan, dễ dùng, giúp có cái nhìn tổng thể khi quản lý công việc.",
      "Dễ dàng gắn thẻ thành viên và đặt thời hạn cụ thể cho từng đầu việc.",
      "Dễ dàng cho các thành viên thông báo tiến độ công việc.",
    ],
    cons: [
      "Giao diện dễ bị rối khi có nhiều thẻ (dự án trong bài là dự án nhỏ nên không gặp vấn đề này).",
      "Cần trả phí để sử dụng các tính năng nâng cao; bản miễn phí tương đối hạn chế.",
    ],
  },
  {
    id: "docs",
    name: "2. Google Docs",
    bullets: [
      "Trực tiếp giám sát tiến độ chi tiết của các thành viên.",
      "Trực tiếp kiểm duyệt và chỉnh sửa nội dung ngay trên file Google Docs.",
    ],
    images: [
      { src: bai4Docs1.url, alt: "Google Docs — lịch sử phiên bản" },
      { src: bai4Docs2.url, alt: "Google Docs — nội dung tài liệu" },
    ],
    pros: [
      "Nhiều người có thể cùng tương tác với một file cùng một lúc.",
      "Có sẵn các bản sao lưu dữ liệu để tránh mất dữ liệu ngoài dự tính.",
    ],
    cons: ["Các thành viên có thể vô tình chỉnh sửa phần văn bản của nhau nếu không cẩn thận."],
  },
  {
    id: "drive",
    name: "3. Google Drive",
    bullets: [
      "Chia thành 2 tầng thư mục: tầng 1 là thư mục tổng, tầng 2 là các thư mục chia theo các đầu việc của dự án, giúp dễ dàng lấy file mà không bị nhầm lẫn.",
      "Các thư mục đặt quyền Editor cho các thành viên để có thể thay đổi file linh hoạt.",
    ],
    images: [{ src: bai4Drive.url, alt: "Cấu trúc thư mục Google Drive" }],
    pros: [
      "Tạo cấu trúc thư mục rõ ràng theo từng phần.",
      "Trưởng nhóm có thể trao quyền phù hợp để bảo mật dữ liệu.",
      "Tất cả thành viên có thể truy cập file từ bất kì đâu.",
    ],
    cons: ["Giới hạn về dung lượng.", "Dễ bị rối nếu không sắp xếp."],
  },
  {
    id: "messenger",
    name: "4. Messenger",
    bullets: ["Sử dụng làm công cụ giao tiếp chính giữa các thành viên."],
    images: [{ src: bai4Messenger.url, alt: "Giao diện chat Messenger nhóm" }],
    pros: ["Ứng dụng giao tiếp phổ biến, ai cũng sử dụng.", "Tốc độ nhanh."],
    cons: [
      "Giới hạn về dung lượng và chất lượng file gửi lên (đã tránh được vì dự án dùng link Google Docs).",
      "Không có khả năng lưu trữ lâu dài (kết hợp với Google Drive để khắc phục).",
    ],
  },
];

function Bai4Page() {
  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          MỤC 4.4 - BÀI 4: GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Bài 4 — Trải nghiệm và đánh giá công cụ cộng tác trực tuyến
        </h2>
      </header>

      <section className="prose-section">
        <h3>I. Lựa chọn công cụ</h3>
        <ul className="mt-3 space-y-2 text-foreground">
          <li><strong>Quản lý dự án:</strong> Trello</li>
          <li><strong>Soạn thảo tài liệu cộng tác:</strong> Google Docs</li>
          <li><strong>Lưu trữ và chia sẻ tệp:</strong> Google Drive</li>
          <li><strong>Giao tiếp nhóm:</strong> Messenger</li>
        </ul>
      </section>

      <section className="prose-section">
        <h3>II. Mô tả chi tiết</h3>
        <div className="mt-4 space-y-8">
          {bai4Tools.map((t) => (
            <div key={t.id} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h4 className="m-0 text-lg font-semibold text-[var(--brand-deep)]">{t.name}</h4>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                {t.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {t.images.length > 0 && (
                <div className={`mt-4 grid gap-4 ${t.images.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                  {t.images.map((img, i) => (
                    <figure key={i} className="overflow-hidden rounded-lg border border-border bg-muted">
                      <img src={img.src} alt={img.alt} className="block w-full h-auto" loading="lazy" />
                      <figcaption className="px-3 py-2 text-xs text-muted-foreground">{img.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="prose-section">
        <h3>III. Phân tích ưu &amp; nhược điểm</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {bai4Tools.map((t) => (
            <div key={t.id} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h4 className="m-0 text-base font-semibold text-[var(--brand-deep)]">{t.name}</h4>
              <p className="mt-3 mb-1 text-sm font-semibold text-emerald-700">Ưu điểm</p>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground">
                {t.pros.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <p className="mt-3 mb-1 text-sm font-semibold text-rose-700">Nhược điểm</p>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground">
                {t.cons.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

import bai5Pdf from "@/assets/bai5.pdf.asset.json";

type Bai5Prompt = {
  label: string;
  quote: string;
  result: string;
};

type Bai5Tool = {
  id: string;
  name: string;
  role: string;
  accent: string; // tailwind color class for badge
  prompts: Bai5Prompt[];
};

const bai5Tools: Bai5Tool[] = [
  {
    id: "claude",
    name: "Claude",
    role: "Tạo & biên tập văn bản",
    accent: "bg-amber-100 text-amber-800 border-amber-300",
    prompts: [
      {
        label: "Prompt 1 — Lấy thông tin nền tảng",
        quote:
          "Đóng vai là một người biên nội dung, tạo bài viết ngắn: một bài viết về tổng quan ứng dụng của AI trong giáo dục, một bài viết về mặt lợi... một bài viết về mặt hại...",
        result:
          "Claude cung cấp 3 bài viết chi tiết (ví dụ: nhắc đến thị trường 20 tỷ USD, nền tảng Khan Academy, Duolingo...).",
      },
      {
        label: "Prompt 2 — Chuyển đổi sang định dạng Infographic",
        quote:
          "Đóng vai là một người soạn nội dung, tạo nội dung để viết một infographic ngắn gọn về ứng dụng của AI trong giáo dục, gồm 3 phần: tổng quan, mặt lợi, mặt hại.",
        result:
          "Claude đã trích xuất các vấn đề chính: dữ liệu ($20B+, 60%, 3x) cho phần Tổng quan, và các gạch đầu cho phần Mặt lợi/Mặt hại.",
      },
    ],
  },
  {
    id: "gemini",
    name: "Google Gemini (Nano Banana 2 / Pro)",
    role: "Tạo hình ảnh minh họa",
    accent: "bg-sky-100 text-sky-800 border-sky-300",
    prompts: [
      {
        label: "Prompt 1 — Hình ảnh Mặt lợi",
        quote: "tạo cho tôi ảnh minh họa về mặt lợi của ứng dụng AI vào giáo dục",
        result:
          "Gemini (Nano Banana 2) tạo ảnh đồ họa phẳng, chia 6 ô rõ ràng (Cá nhân hóa học tập, Trợ lý học tập 24/7, Hỗ trợ giáo viên...). Dùng tùy chọn \"Redo with Pro\" để chữ tiếng Việt và nét vẽ sắc nét hơn.",
      },
      {
        label: "Prompt 2 — Hình ảnh Mặt hại",
        quote:
          "tạo cho tôi ảnh minh họa với phong cách tương tự cho nội dung về mặt hại của ứng dụng AI vào giáo dục",
        result:
          "AI hiểu ngữ cảnh \"phong cách tương tự\" và tạo infographic 6 ô (Thay thế giáo viên, Sự phụ thuộc quá mức, Sai lệch và thiên kiến...) với tông màu cảnh báo phù hợp.",
      },
    ],
  },
  {
    id: "gamma",
    name: "Gamma",
    role: "Hỗ trợ thiết kế & dàn trang",
    accent: "bg-violet-100 text-violet-800 border-violet-300",
    prompts: [
      {
        label: "Cách thức thực hiện",
        quote: "Tại giao diện Gamma, chọn định dạng \"Graphic\" → \"Infographic\".",
        result:
          "Layout: chọn \"Segmented Bar\" để chia các luồng thông tin rõ ràng. Nội dung: dán toàn bộ phần text chứa các con số ($20B+, 60%, 3x) do Claude tạo ra vào ô \"Theme & prompt\" để Gamma dàn trang.",
      },
    ],
  },
];

const bai5Comparison: { tool: string; strength: string }[] = [
  { tool: "Claude", strength: "Vượt trội ở khả năng chắt lọc từ khóa và số liệu." },
  {
    tool: "Gemini",
    strength:
      "Tạo ảnh kèm văn bản tiếng Việt (text-in-image) và sắp xếp bố cục sơ đồ đáng kinh ngạc, vượt xa kỳ vọng về một công cụ chỉ tạo \"ảnh minh họa thông thường\".",
  },
  {
    tool: "Gamma",
    strength:
      "Tiện lợi để tạo nhanh cấu trúc (wireframe) cho infographic, nhưng phần tạo hình ảnh minh họa đi kèm không sát ngữ cảnh bằng Gemini.",
  },
];

const bai5Personal: { title: string; body: string }[] = [
  {
    title: "Kiểm duyệt lỗi văn bản trên ảnh (Typo check)",
    body: "Kiểm tra kỹ các đoạn text trên 2 bức ảnh của Gemini để đảm bảo tính chính xác về chính tả trước khi đưa vào sản phẩm cuối.",
  },
  {
    title: "Định hướng luồng thông tin",
    body: "Lựa chọn các kiểu bố cục, phong cách vẽ và chỉnh sửa trực tiếp để giúp người xem dễ dàng tiếp nhận thông tin theo logic phản biện.",
  },
  {
    title: "Lược bỏ thông tin thừa",
    body: "Chủ động cắt bỏ các đoạn văn quá dài của Claude, chỉnh sửa văn phong sao cho tự nhiên nhất.",
  },
];

const bai5Strengths = [
  "Claude có khả năng gói gọn một bài luận dài thành các bullet point hoàn hảo.",
  "Gemini có thể thiết kế hẳn một cụm layout chia 6 ô với đầy đủ biểu tượng và chữ tiếng Việt tương đối chuẩn xác.",
];

const bai5Limits = [
  "Gamma khi dàn trang tự động đôi khi gặp lỗi font tiếng Việt hoặc sắp xếp khối màu thiếu sự liền mạch.",
  "Hình ảnh của Gemini dù đẹp nhưng không thể chỉnh sửa từng chữ, từng icon bên trong bức ảnh nếu có sai sót (phải prompt lại từ đầu hoặc dùng phần mềm ngoài).",
];

const bai5Ethics: { title: string; body: string }[] = [
  {
    title: "Độ tin cậy của dữ liệu",
    body: "Các số liệu Claude đưa ra (như \"Thị trường $20B+\", \"60% trường học tích hợp AI\") cần được tra cứu và xác minh lại từ các báo cáo tổ chức giáo dục uy tín (như UNESCO hay EdTechX) trước khi xuất bản rộng rãi để tránh phát tán \"ảo giác\" (hallucination) của AI.",
  },
  {
    title: "Bản quyền hình ảnh",
    body: "Layout và cách phân chia 6 ô đồ họa do Gemini tạo ra có thể đã học hỏi từ các nghệ sĩ/nhà thiết kế trên Internet. Dù AI sinh ra ảnh mới, việc sử dụng các sản phẩm này cho mục đích thương mại vẫn là một lằn ranh cần cẩn trọng.",
  },
];

function Bai5Page() {
  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          MỤC 5.4 - BÀI 5: SÁNG TẠO NỘI DUNG SỐ
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Bài 5 — Infographic "Ứng dụng của AI trong Giáo dục: Cơ hội và Thách thức"
        </h2>
      </header>

      <section className="prose-section">
        <h3>I. Tổng quan dự án và lựa chọn công cụ</h3>
        <p className="mt-2 text-foreground">
          Mục tiêu của dự án là thiết kế một Infographic trực quan, súc tích nhằm phân tích bức tranh
          toàn cảnh về Trí tuệ nhân tạo (AI) trong giáo dục — bao gồm tổng quan, mặt lợi và mặt hại.
          Để tối ưu hóa quy trình, kết hợp 3 công cụ:
        </p>
        <ul className="mt-3 space-y-2 text-foreground">
          <li><strong>Claude:</strong> Đóng vai trò biên tập viên, tóm tắt thông tin từ bài viết chi tiết sang dạng số liệu, gạch đầu dòng phù hợp cho Infographic.</li>
          <li><strong>Google Gemini (Nano Banana 2/Pro):</strong> Phụ trách tạo các khối hình ảnh minh họa dạng sơ đồ trực quan, có chứa thông tin tiếng Việt cho hai phần "Lợi ích" và "Rủi ro".</li>
          <li><strong>Gamma:</strong> Tự động hóa dàn trang (layout) Infographic dựa trên nội dung chữ thô.</li>
        </ul>
      </section>

      <section className="prose-section">
        <h3>II. Ghi chép chi tiết quá trình sử dụng AI</h3>
        <div className="mt-4 space-y-6">
          {bai5Tools.map((tool) => (
            <div key={tool.id} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="m-0 text-lg font-semibold text-[var(--brand-deep)]">{tool.name}</h4>
                <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${tool.accent}`}>
                  {tool.role}
                </span>
              </div>
              <div className="mt-4 space-y-4">
                {tool.prompts.map((p, i) => (
                  <div key={i} className="rounded-lg bg-muted/40 p-4">
                    <p className="m-0 text-sm font-semibold text-[var(--brand-deep)]">{p.label}</p>
                    <blockquote className="mt-2 border-l-2 border-[var(--brand)] pl-3 text-sm italic text-foreground/80">
                      "{p.quote}"
                    </blockquote>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      <strong>Kết quả:</strong> {p.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
          <h4 className="m-0 text-lg font-semibold text-[var(--brand-deep)]">Tích hợp & So sánh các công cụ</h4>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            <strong>Tích hợp:</strong> Sử dụng khung sườn và phần chữ tổng quan do <strong>Gamma</strong> tự động dàn
            trang. Sau đó, thay vì dùng chữ dài dòng cho phần lợi/hại, chèn trực tiếp 2 hình ảnh Infographic chi tiết
            mà <strong>Gemini</strong> đã tạo ra vào bản thiết kế cuối cùng — tạo nên một tổng thể vừa có số liệu tóm
            tắt (từ Claude/Gamma) vừa có minh họa trực quan (từ Gemini).
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {bai5Comparison.map((c) => (
              <div key={c.tool} className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="m-0 text-sm font-semibold text-[var(--brand-deep)]">{c.tool}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{c.strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section">
        <h3>III. Hoàn thiện dự án với đóng góp cá nhân</h3>
        <p className="mt-2 text-foreground">Dù AI hỗ trợ đắc lực, vẫn cần các bước can thiệp thủ công:</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {bai5Personal.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="m-0 text-sm font-semibold text-[var(--brand-deep)]">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="prose-section">
        <h3>IV. Phân tích vai trò của AI trong quá trình sáng tạo</h3>

        <h4 className="mt-4 text-base font-semibold text-[var(--brand-deep)]">1. Những phần AI làm tốt và còn hạn chế</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="m-0 text-sm font-semibold text-emerald-700">Làm tốt</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              {bai5Strengths.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
            <p className="m-0 text-sm font-semibold text-rose-700">Hạn chế</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              {bai5Limits.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>

        <h4 className="mt-6 text-base font-semibold text-[var(--brand-deep)]">2. Cách AI thay đổi quy trình sáng tạo</h4>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Với phương pháp cũ, làm Infographic đòi hỏi phải thành thạo Illustrator/Photoshop, lên mạng tải từng icon,
          tự vẽ từng khối hộp rồi mới gõ chữ vào. Với quy trình mới bằng AI, người dùng đóng vai trò chính —
          Claude viết nội dung, Gemini vẽ các khối đồ họa phức tạp, và Gamma làm khung chứa. Thời gian rút ngắn từ
          vài ngày xuống chỉ còn vài giờ.
        </p>

        <h4 className="mt-6 text-base font-semibold text-[var(--brand-deep)]">3. Các vấn đề đạo đức cần cân nhắc</h4>
        <div className="mt-3 space-y-3">
          {bai5Ethics.map((e) => (
            <div key={e.title} className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
              <p className="m-0 text-sm font-semibold text-amber-800">{e.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{e.body}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

import bai6Infographic from "@/assets/bai6/infographic.png.asset.json";

const bai6Prompts: { id: string; quote: string }[] = [
  {
    id: "1",
    quote:
      "Hãy liệt kê các nguyên tắc đạo đức cốt lõi trong phát triển phần mềm theo góc nhìn học thuật, có trích dẫn nguồn.",
  },
  {
    id: "2",
    quote:
      "Phân tích sự khác biệt giữa đạo đức kỹ sư phần mềm theo IEEE và ACM. Trình bày dưới dạng so sánh.",
  },
  {
    id: "3",
    quote:
      "Tóm tắt các nghiên cứu thực nghiệm về tác động của vi phạm đạo đức trong phần mềm với dẫn chứng thực tế.",
  },
  {
    id: "4",
    quote:
      "Đánh giá điểm mạnh và hạn chế của các khung đạo đức hiện tại, đề xuất hướng cải thiện.",
  },
];

const bai6EditSteps: { title: string; body: string }[] = [
  {
    title: "Kiểm tra chéo",
    body: "Đối chiếu các thông tin và trích dẫn mà AI đề cập với nguồn gốc thực tế thông qua Google Scholar và IEEE Xplore. Phát hiện 2/8 tài liệu AI đề cập có năm xuất bản không chính xác.",
  },
  {
    title: "Loại bỏ nội dung không phù hợp",
    body: "Một số đoạn AI tổng hợp mang tính liệt kê chung chung, thiếu chiều sâu phân tích — đã được viết lại hoàn toàn.",
  },
  {
    title: "Bổ sung góc nhìn cá nhân",
    body: "Thêm các ví dụ từ thực tiễn Việt Nam và bối cảnh UET-VNU mà AI không có dữ liệu cập nhật.",
  },
  {
    title: "Sắp xếp lại cấu trúc",
    body: "Tái tổ chức luận điểm theo logic phân tích từ lý thuyết đến thực tiễn, thay vì theo cách AI liệt kê tuần tự.",
  },
];

const bai6Principles: { title: string; body: string }[] = [
  {
    title: "Nguyên tắc 50/50",
    body: "AI không bao giờ đóng góp quá 50% nội dung bài làm; 50% còn lại phải là sự kiểm chứng và tư duy cá nhân.",
  },
  {
    title: "Minh bạch tuyệt đối",
    body: "Luôn có ghi chú về việc sử dụng AI ở cuối mỗi bài nộp.",
  },
  {
    title: "Kiểm chứng chéo (Fact-check)",
    body: "Luôn kiểm tra lại các thông tin, thông số, mã nguồn mà AI cung cấp bằng tài liệu tin cậy.",
  },
  {
    title: "AI là phụ tá, không phải tác giả",
    body: "Chỉ dùng AI để gợi mở ý tưởng khi bị \"bí\", không dùng để thay thế quá trình học tập.",
  },
  {
    title: "Bảo mật dữ liệu",
    body: "Không đưa các thông tin nội bộ của trường hoặc các dự án nghiên cứu chưa công bố lên AI.",
  },
];

function Bai6Page() {
  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          MỤC 6.4 - BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT TRONG MÔI TRƯỜNG SỐ
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Bài 6 — Sử dụng AI có trách nhiệm trong học tập và nghiên cứu
        </h2>
      </header>

      <section className="prose-section">
        <h3>I. Chính sách về sử dụng AI tại Đại học Quốc gia Hà Nội (VNU) và UET</h3>
        <p className="mt-2 text-foreground">
          Hiện nay, Đại học Quốc gia Hà Nội nói chung và trường Đại học Công nghệ nói riêng đang có
          những bước đi chủ động trong việc thích nghi với AI:
        </p>
        <ul className="mt-3 space-y-2 text-foreground">
          <li>
            <strong>Chủ trương chung:</strong> VNU khuyến khích ứng dụng công nghệ số và AI để nâng
            cao chất lượng giảng dạy nhưng nhấn mạnh vào sự minh bạch.
          </li>
          <li>
            <strong>Quy định tại UET:</strong> Là một trường kỹ thuật hàng đầu, UET coi AI là công
            cụ hỗ trợ chứ không thay thế hoàn toàn con người. Việc nộp bài làm hoàn toàn bằng AI mà
            không có sự chỉnh sửa hay trích dẫn bị coi là vi phạm quy chế thi cử và kiểm tra
            (tương đương với hành vi đạo văn).
          </li>
          <li>
            <strong>Yêu cầu minh bạch:</strong> Sinh viên được phép dùng AI để tìm hiểu kiến thức,
            gợi ý ý tưởng hoặc tối ưu hóa mã nguồn (coding), nhưng phải có khả năng giải trình về
            nội dung mình nộp.
          </li>
        </ul>
      </section>

      <section className="prose-section">
        <h3>II. Thực hành nhiệm vụ học tập với sự hỗ trợ của AI</h3>
        <p className="mt-2 text-foreground">
          <strong>Nhiệm vụ:</strong> Chuẩn bị nội dung thuyết trình cho chủ đề{" "}
          <em>"Đạo đức trong phát triển phần mềm"</em>.
        </p>

        <h4 className="mt-5 text-base font-semibold text-[var(--brand-deep)]">
          1. Nhật ký tương tác với AI
        </h4>
        <div className="mt-3 overflow-hidden rounded-xl border border-border">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {bai6Prompts.map((p, i) => (
                <tr
                  key={p.id}
                  className={i % 2 === 0 ? "bg-[var(--brand-soft)]/60" : "bg-card"}
                >
                  <td className="w-12 border-b border-border px-3 py-3 text-center font-semibold text-[var(--brand-deep)]">
                    {p.id}
                  </td>
                  <td className="border-b border-border px-4 py-3 leading-relaxed text-foreground">
                    {p.quote}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="mt-6 text-base font-semibold text-[var(--brand-deep)]">
          2. Đánh giá, chỉnh sửa và tích hợp
        </h4>
        <p className="mt-2 text-foreground">
          AI (Claude 3.5 Sonnet, Anthropic) đã cung cấp các phản hồi chi tiết và có cấu trúc tốt.
          Tuy nhiên, sau khi nhận được đầu ra, đã thực hiện các bước đánh giá và chỉnh sửa như sau:
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {bai6EditSteps.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="m-0 text-sm font-semibold text-[var(--brand-deep)]">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <h4 className="mt-6 text-base font-semibold text-[var(--brand-deep)]">
          3. Trích dẫn minh bạch
        </h4>
        <p className="mt-2 text-foreground">
          Trong phần tổng hợp tài liệu của bài báo cáo, sử dụng cách ghi chú như sau:
        </p>
        <blockquote className="mt-3 rounded-lg border-l-4 border-[var(--brand)] bg-muted/40 p-4 text-sm italic leading-relaxed text-foreground">
          [AI-assisted] Phần tổng hợp này được thực hiện với sự hỗ trợ của Claude (Anthropic,
          2024), sử dụng prompt: "Phân tích sự khác biệt giữa đạo đức kỹ sư phần mềm theo IEEE và
          ACM". Đầu ra của AI đã được tác giả kiểm tra, chỉnh sửa và bổ sung dựa trên nguồn tài
          liệu gốc từ IEEE Xplore và ACM Digital Library.
        </blockquote>
      </section>

      <section className="prose-section">
        <h3>III. Phân tích các vấn đề đạo đức trong học thuật</h3>

        <h4 className="mt-4 text-base font-semibold text-[var(--brand-deep)]">
          1. Ranh giới giữa hỗ trợ và gian lận
        </h4>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="m-0 text-sm font-semibold text-emerald-700">Hỗ trợ</p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground">
              Dùng AI để giải thích khái niệm khó, tìm lỗi sai trong code (debug), hoặc gợi ý cấu
              trúc bài viết.
            </p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
            <p className="m-0 text-sm font-semibold text-rose-700">Gian lận</p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground">
              Copy-paste toàn bộ phản hồi của AI và coi đó là bài làm của mình; dùng AI để giải bài
              tập về nhà mà không hiểu bản chất.
            </p>
          </div>
        </div>

        <h4 className="mt-6 text-base font-semibold text-[var(--brand-deep)]">
          2. Quyền sở hữu trí tuệ và trích dẫn
        </h4>
        <p className="mt-2 text-foreground">
          Khi sử dụng AI trong học thuật, câu hỏi về quyền tác giả trở nên phức tạp. AI tổng hợp
          nội dung từ dữ liệu huấn luyện khổng lồ — vậy ai là tác giả của đầu ra? Theo khung pháp
          lý hiện tại tại Việt Nam (Luật Sở hữu Trí tuệ 2022), AI không được công nhận là tác giả.
          Người sử dụng AI và chỉnh sửa đầu ra mới là người chịu trách nhiệm về nội dung.
        </p>
        <p className="mt-2 text-foreground">
          Tuy nhiên, nếu nội dung AI tạo ra vô tình trùng với tác phẩm có bản quyền trong dữ liệu
          huấn luyện, người dùng có thể vô tình vi phạm bản quyền mà không hay biết. Điều này đòi
          hỏi người dùng phải luôn kiểm tra và không sao chép toàn văn đầu ra AI. Chuẩn trích dẫn
          AI được khuyến nghị (theo APA 7th edition):
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-foreground">
          <li>
            OpenAI. (2024). <em>ChatGPT (GPT-4o)</em> [Mô hình ngôn ngữ lớn].{" "}
            <span className="text-[var(--brand)]">https://chat.openai.com</span>
          </li>
          <li>
            Anthropic. (2024). <em>Claude (claude-3-5-sonnet)</em> [Mô hình ngôn ngữ lớn].{" "}
            <span className="text-[var(--brand)]">https://claude.ai</span>
          </li>
        </ul>

        <h4 className="mt-6 text-base font-semibold text-[var(--brand-deep)]">
          3. Tác động đến quá trình học tập và phát triển kỹ năng
        </h4>
        <p className="mt-2 text-foreground">
          Đây là mối lo ngại sâu xa nhất về mặt giáo dục. Nghiên cứu của Bastani et al. (2024) tại
          MIT cho thấy sinh viên sử dụng AI quá mức trong bài tập thực hành có kết quả kém hơn
          17–24% trong bài kiểm tra không có AI so với nhóm tự làm. Điều này chỉ ra rằng AI có thể
          tạo ra <strong>"hiệu ứng nạng"</strong> — thay thế việc phát triển tư duy thay vì hỗ trợ
          nó. Tại UET-VNU, bối cảnh này đặc biệt quan trọng vì sinh viên ngành công nghệ thông tin
          cần phát triển tư duy lập trình, khả năng giải quyết vấn đề và sáng tạo kỹ thuật — những
          kỹ năng đòi hỏi quá trình rèn luyện thực sự, không thể "vay mượn" từ AI.
        </p>
      </section>

      <section className="prose-section">
        <h3>IV. Bộ nguyên tắc cá nhân (5 nguyên tắc)</h3>
        <ol className="mt-3 space-y-3">
          {bai6Principles.map((p, i) => (
            <li
              key={p.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-base font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="m-0 text-sm font-semibold text-[var(--brand-deep)]">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="prose-section">
        <h3>V. Infographic "Sử dụng AI có trách nhiệm"</h3>
        <figure className="mt-4 overflow-hidden rounded-xl border border-border bg-card p-3 shadow-sm">
          <img
            src={bai6Infographic.url}
            alt="Infographic Responsible AI Use — Suggestions, Avoid, Process"
            className="mx-auto w-full max-w-3xl"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Infographic tổng kết: Suggestions · Avoid · Process trong việc sử dụng AI có trách nhiệm.
          </figcaption>
        </figure>
      </section>
    </article>
  );
}
