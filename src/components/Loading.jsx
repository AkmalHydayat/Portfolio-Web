
const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center space-x-4">
            <div className="w-4 h-4 rounded-full bg-yellow animate-customPing1 "></div>
            <div className="w-4 h-4 rounded-full bg-blue animate-customPing2 "></div>
            <div className="w-4 h-4 rounded-full bg-red animate-customPing3 "></div>
            <div className="w-4 h-4 rounded-full bg-gray animate-customPing4 "></div>
        </div>
    )
}

export default Loading