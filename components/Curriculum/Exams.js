
const Exams = ({ data }) => {
    return (
        <>
            {
                data.map((unit, index) => {
                    const title = unit.title;
                    return (
                        <>
                            <div key={index} >
                                <p> {title} </p>
                            </div>
                        </>
                    )
                })
            }
        </>
    );
};

export default Exams;