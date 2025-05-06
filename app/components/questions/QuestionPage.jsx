
import QnA from "./QnA";
import { qna } from "@/app/data";

const QuestionPage = () => {
  return (
    <div id="qna" className="w-[100vw] h-full bg-[url('/bg/green_env.png')] bg-cover bg-center text-white">
      <div className="flex flex-wrap gap-6 max-w-[1280px] mx-auto justify-center pb-[124px] px-16">
        {qna.map((item, index) => (
            <QnA 
                key={index}
                question={item.question}
                answer={item.answer}
            />
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
