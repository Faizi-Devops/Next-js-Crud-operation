import { useState } from "react";
import Button from "../Button/Button";
import Data from "../Data/Data";

type A = {
    name: string,
    class: string,
    batch: string,
    roll: string,
}

const StudentList = () => {
    const [data, setData] = useState<A[]>(Data);
    const [kame,setKam]=useState<string>();
    const [slass,setSlass]=useState<string>();
    const [katch,setKatch]=useState<string>();
    const [koll,setKoll]=useState<string>();
    const alpha = (e:any) =>{
        setKam(e.target.value)

    }
    const beta = (e:any) =>{
        setSlass(e.target.value)


    }
    const gema = (e:any) =>{
        setKatch(e.target.value)

    }
    const peta = (e:any) =>{
        setKoll(e.target.value)

    }
    const OnClickHandler = () =>{
        let newStudent = {
            name:kame,
            class:slass,
            batch:katch,
            roll:koll,
        }
        setData([...data,newStudent])
        setKam("")
        setKatch("")
        setSlass("")
        setKoll("")
    }
    const OnDeleteHandler = (index:number) =>{
        let newKuch = data.filter((value,i)=>{

            if(i!=index){
                return index;
            }
        })
        setData([...newKuch])

    }

    return (
        <div>
            <input type="text" value={kame} placeholder="Name" onChange={alpha}/>
            <br /><br />
            <input type="text" value={slass}  placeholder="Class" onChange={beta}/>
            <br /><br />
            <input type="text" value={katch} placeholder="Batch" onChange={gema}/>
            <br /><br />
            <input type="text" value={koll} placeholder="Roll" onChange={peta}/>
            <br /><br />
            <Button data="Sumit" action={OnClickHandler} />





            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Roll</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    data.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.class}</td>
                                <td>{value.batch}</td>
                                <td>{value.roll}</td>
                                <td>
                                <button type="button" className="btn btn-danger" onClick={()=>OnDeleteHandler(index)}>Delete</button>
                                </td>
                            </tr>
                        )

                    })

                }
            </table>

        </div>
    )
}
export default StudentList;