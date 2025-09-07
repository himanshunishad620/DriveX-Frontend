export const getFileSize=(file:File)=>{
        const MB=Math.ceil((file.size/1024)/1024)
        if(file.type.startsWith("video/")){
                if(MB>100) {
                        return false
                }else{
                        return true
                }
        }else{
                if(MB>100) {
                        return false
                }else{
                        return true
                }
        }
}
export const formatToMBorGB=(bytes:number) =>{
  const mb = bytes / (1024 * 1024);
  
  if (mb < 1024) {
    return mb.toFixed(1) + "MB";
  } else {
    const gb = mb / 1024;
    return gb.toFixed(1) + "GB";
  }
}
export const formatToMBorGBNumber=(bytes:number) =>{
  const mb = bytes / (1024 * 1024);
  
  if (mb < 1024) {
    return mb.toFixed(1);
  } else {
    const gb = mb / 1024;
    return gb.toFixed(1) ;
  }
}
