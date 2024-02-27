import axios from "axios";
import { useEffect, useState } from "react";
import Fact from "../types";
import FactCard from "./FactCard";


const Facts = () => {

    const [data, setData] = useState<Array<Fact>>([]);

    const getFacts = async () => {
        const res = await axios.get("http://localhost:3000/");
        setData(res.data)
    }

    useEffect(() => {
        getFacts();
    }, [data])

    return (
        <div className='grid grid-cols-4 gap-4'>
            {data.map(i => (
                <FactCard fact={i} />
            ))}
        </div>
    )
}

export default Facts