import CourseITem from '../../Shared/CourseITem/CourseITem';

const CourseList = ({items}) => {
    return (
        <div>
             <div className="grid md:grid-cols-2 gap-10">
                {
                    
                    items.map(item => <CourseITem
                        key={item._id}
                        item={item}
                    
                    >

                    </CourseITem>)
                }
            </div >
        </div>
    );
};

export default CourseList;