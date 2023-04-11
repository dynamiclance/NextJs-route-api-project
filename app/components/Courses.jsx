import Link from "next/link";

const CoursesPage = ({courses}) => {

  return (
    <div className="courses">
      {
        courses.map( (course) => (
          <div key={course.id} className="card">
            <h2>{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link href={course.link} target="_blank">Go to course</Link>
          </div>
        ))
      }
    </div>
  )
}

export default CoursesPage