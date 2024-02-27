import Fact from "../types"

type FCProps = {
    fact: Fact
}

const FactCard = ({ fact }: FCProps) => {

    const deleteFact = async () => {
      await axios.delete()
    }

  return (
    <div className="border py-4 px-4 rounded-lg">
        <h3 className="text-2xl">Вопрос: {fact.question}</h3>
        <div className="py-4">
            <hr />
        </div>
        <h3 className="text-2xl">Ответ: {fact.answer}</h3>
    </div>
  )
}

export default FactCard