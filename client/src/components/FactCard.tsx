import axios from "axios"
import Fact from "../types"
import toast from "react-hot-toast"

type FCProps = {
    fact: Fact
}

const FactCard = ({ fact }: FCProps) => {

    const deleteFact = async () => {
      try {
        await axios.delete(`http://localhost:3000/delete?id=${fact.ID}`);
        toast.success("Удалено!")
      } catch (error) {
        toast.error("Произошла ошибка")
      }

    }

  return (
    <div className="border py-4 px-4 rounded-lg">
        <h3 className="text-2xl">Вопрос: {fact.question}</h3>
        <div className="py-4">
            <hr />
        </div>
        <h3 className="text-2xl">Ответ: {fact.answer}</h3>
        <div className="py-4">
          <button 
            onClick={deleteFact}
            className="border hover:bg-red-400 py-2 px-6 rounded-md transition"
          >
            Удалить
          </button>
        </div>
    </div>
  )
}

export default FactCard