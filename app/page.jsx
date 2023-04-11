'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

import CoursesPage from "./components/courses"
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";


const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCourseData = async () => {
      const res = await fetch('/api/courses');
      const courses = await res.json();

      setCourses(courses);
      setLoading(false);

    }

    fetchCourseData();
   
  }, [])

  if(loading) {
    <LoadingPage />
  }
  
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome to Dynamic Lance</h1>
      <CourseSearch getSearchResults={ (result) => setCourses(result) } />
      <CoursesPage courses={courses} />
    </div>
  )
}

export default HomePage