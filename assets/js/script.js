const thumbField = document.getElementById("image-field");
const sampleImage = document.getElementById("sample-image");
const formElement = document.getElementById("form-info");

thumbField.addEventListener("change", async function() {
    const file = this.files[0]; 
    const base64 = await toBase64(file);
    if (base64) {
        sampleImage.src = base64;
    }
});

const toBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        resolve(reader.result);
      };
  
      reader.onerror = reject;
  
      reader.readAsDataURL(file);
    });
  };

  formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    handleThumb();
    handleTitle();
    handleChannelName();
    handleProfileImage();
    handleVisibility();

    function handleThumb() {
        const thumbPreview = document.getElementsByClassName("thumb-preview");
        for(const thumb of thumbPreview) {
           thumb.src = sampleImage.src;
        }
    }
    
    function handleTitle() {
        const titleElement = document.getElementById("title-field");
        const titlePreview = document.getElementsByClassName("title-preview");
        const maxLength = 61;
        const text = addDotsAtTheEnd(titleElement.value, maxLength);
        for(const title of titlePreview) {            
            title.textContent = text;
            title.title = titleElement.value;
        }  
    }

    function addDotsAtTheEnd (text, limit) {
        if (text.length > limit) {
            return text.substring(0, limit - 3) + '...';
        }     
        return text;
    }    

    function handleChannelName() {
        const channelNameElement = document.getElementById("channel-name-field");
        if (channelNameElement.value) {
            const channelNamePreview = document.getElementsByClassName("channel-name-preview");
            for(const channelName of channelNamePreview) {
                channelName.textContent = channelNameElement.value;
            }
         }
    }
    
    function handleProfileImage() {        
        const profileImageUrlElement = document.getElementById("profile-image-url-field");
        if (profileImageUrlElement.value) {
            const profileImagePreview = document.getElementsByClassName("profile-36");
            for(const profileImage of profileImagePreview) {
                profileImage.src = profileImageUrlElement.value;
            }
         }
    }
    
    function handleVisibility() {
        const previewContainer = document.getElementById("preview-container");
        previewContainer.style.display = "flex";
        previewContainer.scrollIntoView({ behavior: "smooth" });
    }   
});


document.getElementById("year").textContent = new Date().getFullYear();