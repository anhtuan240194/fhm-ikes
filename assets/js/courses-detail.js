//Event collapse - Show Questions
// const itemCollpase = document.querySelectorAll('.item-collapse')

// const callItemCollapse = (items) => {
//   Array.from(items).forEach(item => {
//     const button = item.querySelector('.session-title')
//     const des = item.querySelector('.item-collapse-body')

//     //If has class active
//     if(item.classList.contains('active')){
//       des.style.maxHeight = des.scrollHeight + 48 + 'px'
//     }
    
//     button.on('click', () => {
//       //Clear active all item
//       Array.from(items).forEach((itemCheck) => {
//         if(itemCheck !== item) {
//           itemCheck.classList.remove('active')
//           const des = itemCheck.querySelector('.item-collapse-body')
//           des.style.maxHeight = null
//         }
//       })

//       item.classList.toggle('active')

//       if( des.style.maxHeight){
//         des.style.maxHeight = null
//       } else {
//         des.style.maxHeight = des.scrollHeight + 48 + 'px'
//       }
//     })
//   })
// }

// callItemCollapse(itemCollpase)

const sideDetailCourses = document.querySelector('.detail-courses .courses-side')
if(sideDetailCourses) {
  if(window.innerWidth > 992) {
    window.addEventListener('scroll', (e) => {
      const scroll = scrollY - 370
  
      if(scroll > 0) {
          sideDetailCourses.style.transform = "translateY(0px)"
          return true
      }
      
      sideDetailCourses.style.transform = "translateY(" + scroll + "px)"   
  })
  }
}
