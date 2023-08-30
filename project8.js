if(innerWidth >= 1024){
addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const yOffset = window.pageYOffset;
    const li = this.document.getElementsByTagName('a')
    const link = this.document.getElementById('specialLink')
    if(yOffset > 5 && this.screen.width > 1023){
      header.style.maxHeight = '70px'  
      link.style.padding = '10px 0 0 10px'
      for(let i =0;i<li.length;i++){
        li[i].style.marginTop = '0px'
      }  
    } else {
      header.style.maxHeight = '110px'
      link.style.padding = '10px 40px 60px 60px'
      for(let i =0;i<li.length;i++){
        li[i].style.marginTop = '20px'
      } 
    }
})};
let toggleIcon = document.getElementById('fa-list')
let items = document.getElementById('items')
toggleIcon.onclick = () => {
  if(items.style.display == 'none'){
    items.style.display = 'block'
    toggleIcon.className = 'fa-solid fa-circle-xmark'
  }else{
    items.style.display = 'none'
    toggleIcon.className = 'fas fa-list'
  }
}

  





