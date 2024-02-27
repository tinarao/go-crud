import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

const AddFactForm = () => {

    const [form, setForm] = useState({
        question: undefined,
        answer: undefined,
    })

    const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: [e.target.value].join()
        }))
    }

    const addFact = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (form.question === undefined || form.answer === undefined) {
            toast.error("Поля не могут быть пустыми!")
        } else {
            try {
                await axios.post("http://localhost:3000/add", form)
                toast.success("Успешно!")
            } catch (error) {
                toast.error("Ошибка!")
            }
        }
    }

    return (
        <form className="flex gap-12">
            <div className="flex gap-4">
                <input onChange={changeForm} placeholder="Вопрос" name="question" className="px-8 py-2 rounded-lg border" />
                <input onChange={changeForm} placeholder="Ответ" name="answer" className="px-8 py-2 rounded-lg border" />
            </div>
            <button
                onClick={addFact}
                className="py-2 px-4 border hover:bg-indigo-100 rounded-md"
            >
                Отправить
            </button>
        </form>
    )
}

export default AddFactForm