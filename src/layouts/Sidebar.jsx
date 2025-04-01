const SideBar = () => {

    const navigate = useNavigate();

    const authentication = localStorage.getItem("authentication");

    useEffect(() => {
        if (!authentication) {
            navigate('/')
        }
    }, [])

    return (

        <div className="w-[200px] h-screen bg-blue-200" >
            <div>
                Sidebar
            </div>
        </div>
    )
}

export default SideBar;