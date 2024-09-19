"use client"
import {useState, useEffect} from "react"
import {Center, Heading, Table, Thead, Tbody, Tr, Th ,Td} from "@chakra-ui/react"

export interface responceData {
    id: number
    name: string
    email: string
    content_question: string
    postdate: string
}
const Page = () => {

    const [contents, setContents] = useState<responceData[]>([])
    const initFetch = async () => {
        const response = await fetch("/api/contents")
        const data = await response.json()
        setContents(data.contents)
    }

    useEffect(() => {
        initFetch()
    },[])
    
    return <Center w="full" flexDirection="column">
        <Heading py={5}>お問合せ一覧</Heading>
        <Table>
            <Thead>
                <Tr>
                    <Th>No.</Th>
                    <Th>名前</Th>
                    <Th>メール</Th>
                    <Th>内容</Th>
                    <Th>時間</Th>
                </Tr>
            </Thead>
            <Tbody>
                {contents.map((item, index) => (
                    <Tr key={index}>
                        <Td>{item.id}</Td>
                        <Td>{item.name}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.content_question}</Td>
                        <Td>{item.postdate}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </Center>
}

export default Page