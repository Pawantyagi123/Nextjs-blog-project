"use client";
import BlogList from "@/components/bloglist/BlogList";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
     <Header/>
     <BlogList/>
     <Footer/>
    </>
  );
}
