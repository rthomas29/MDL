import React from "react"

const Pagination = (propss)=>{
    const pageNumbers = []
        for(let i=1; i<=Math.ceil(propss.totalApps/propss.appsPerPage);i++){
            pageNumbers.push(i)
        }
        
    return(
        <nav>
            <ul className= "pagination">
                {pageNumbers.map(number=>(
                    <li id="pageNumber" key= {number} className= "page-item">
                        <a  onClick={()=>propss.paginate(number)} href= "#" className= "page-link">
                           {number} 
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination