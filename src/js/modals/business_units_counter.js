const wait = (waitTimeInMs) => { 
  let waitTimeOut = null;

  return new Promise((resolve) => { 
    waitTimeOut = setTimeout(() => {
      resolve();
    }, waitTimeInMs);
  }).finally(() => { 
    clearTimeout(waitTimeOut);
    waitTimeOut = null;
  })
}

const cafesIncrementor = async (countElement, maxNumber) => { 
  for (let i = 0; i <= maxNumber; i++) { 
    countElement.innerText = i;
    await wait(30);
  }
}

(() => {
  const dataCafesCountContainer = document.getElementById("cafes-count");
  const dataTrucksCountCountainer = document.getElementById("trucks-count");
  
  const cafesMaxCount = dataCafesCountContainer.dataset.cafesCount;
  const trucksMaxCount = dataTrucksCountCountainer.dataset.truckCount;
  
  cafesIncrementor(dataCafesCountContainer, cafesMaxCount)
    .then(() => { 
      console.log(trucksMaxCount)
      cafesIncrementor(dataTrucksCountCountainer, trucksMaxCount)
    });
})();
  
  // count__number  id cafes-count data-cafes-count="16"
  // count__number  id trucks-count data-truck-count="23"