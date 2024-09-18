import { Checkbox } from "@nextui-org/react"

interface Props {
    data: {
        status: number,
        value: string
    }[]
}{

}
export default ({ data }: Props) => {
    return (
        <>
            <div className="flex flex-col space-y-2">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-wrap justify-between items-center">
                        <Checkbox key={index} defaultSelected={item.status === 3}>{item.value}</Checkbox>

                        {item.status === 1 && <span className="hidden xs:block text-xs text-yellow-400">待完成</span>}
                        {item.status === 2 && <span className="hidden xs:block text-xs text-red-500">未完成</span>}
                        {item.status === 3 && <span className="hidden xs:block text-xs text-green-500">已完成</span>}

                        {item.status === 1 && <span className="block xs:hidden overflow-hidden w-2 h-2 bg-yellow-400 rounded-full"></span>}
                        {item.status === 2 && <span className="block xs:hidden overflow-hidden w-2 h-2 bg-red-500 rounded-full"></span>}
                        {item.status === 3 && <span className="block xs:hidden overflow-hidden w-2 h-2 bg-green-500 rounded-full"></span>}
                    </div>
                ))}
            </div>
        </>
    )
}