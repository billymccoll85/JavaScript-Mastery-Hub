let internetFacts = [
    { year: 1969, fact: "First ARPANET link established." },
    { year: 1970, fact: "First-ever computer-to-computer chat." },
    { year: 1971, fact: "Ray Tomlinson sends the first email." },
    { year: 1972, fact: "First public demonstration of ARPANET." },
    { year: 1973, fact: "Global networking becomes a reality." },
    { year: 1974, fact: "The term 'Internet' is born." },
    { year: 1975, fact: "First virtual band created on ARPANET." },
    { year: 1976, fact: "Queen Elizabeth II sends an email." },
    { year: 1977, fact: "First optic fiber connections established." },
    { year: 1978, fact: "First spam email sent." },
    { year: 1979, fact: "Usenet and UNIX are developed." },
    { year: 1980, fact: "First online forum: CBBS goes live." },
    { year: 1981, fact: "CSNET (Computer Science NETwork) is launched." },
    { year: 1982, fact: "First emoticons used." },
    { year: 1983, fact: "Domain Name System (DNS) introduced." },
    { year: 1984, fact: "First Apple Macintosh computer sold." },
    { year: 1985, fact: "First domain name registered." },
    { year: 1986, fact: "First virus spread across the internet." },
    { year: 1987, fact: "First Cisco router is shipped." },
    { year: 1988, fact: "First IRC (Internet Relay Chat) developed." },
    { year: 1989, fact: "Tim Berners-Lee invents the World Wide Web." },
    { year: 1990, fact: "First search engine, Archie, is launched." },
    { year: 1991, fact: "First website goes live to the public." },
    { year: 1992, fact: "First audio and video are distributed over the internet." },
    { year: 1993, fact: "Mosaic web browser is released." },
    { year: 1994, fact: "Yahoo is founded." },
    { year: 1995, fact: "Amazon and eBay are launched." },
    { year: 1996, fact: "Internet Explorer becomes the dominant web browser." },
    { year: 1997, fact: "Netflix is founded." },
    { year: 1998, fact: "Google is founded." },
    { year: 1999, fact: "Wi-Fi becomes a standard." },
    { year: 2000, fact: "Dot-com bubble bursts." },
    { year: 2001, fact: "Wikipedia is launched." },
    { year: 2002, fact: "Friendster, the first social network, is launched." },
    { year: 2003, fact: "MySpace becomes the most popular social network." },
    { year: 2004, fact: "Facebook is founded." },
    { year: 2005, fact: "YouTube is launched." },
    { year: 2006, fact: "Twitter is founded." },
    { year: 2007, fact: "iPhone is released, bringing Internet to mobile." },
    { year: 2008, fact: "Google Chrome browser is released." },
    { year: 2009, fact: "Bitcoin and blockchain technology are invented." },
    { year: 2010, fact: "Instagram is launched." },
    { year: 2011, fact: "Snapchat is launched." },
    { year: 2012, fact: "Facebook reaches 1 billion users." },
    { year: 2013, fact: "Edward Snowden leaks NSA documents." },
    { year: 2014, fact: "Heartbleed bug exposes Internet security flaws." },
    { year: 2015, fact: "Net neutrality becomes a global discussion." },
    { year: 2016, fact: "The term 'fake news' enters public consciousness." },
    { year: 2017, fact: "WannaCry ransomware attack." },
    { year: 2018, fact: "GDPR regulations come into effect in EU." },
    { year: 2019, fact: "TikTok becomes the most downloaded app." },
    { year: 2020, fact: "COVID-19 pandemic leads to Internet usage surge." },
    { year: 2021, fact: "NFTs (Non-fungible tokens) gain popularity." },
    { year: 2022, fact: "Remote work becomes a norm." },
    { year: 2023, fact: "Quantum computing becomes more practical." }
  ];
  
  
  let currentPage = 0;
  const pagesToShow = 5; // Number of pages to show at once
  const lastPagesToShow = 3; // Number of last pages to show
  
  function renderFact() {
    const fact = internetFacts[currentPage];
    document.getElementById("fact-display").innerHTML = `<h3>${fact.year}</h3><p>${fact.fact}</p>`;
  }
  
  function updatePaginationDots() {
    const paginationDiv = document.getElementById("pagination-dots");
    paginationDiv.innerHTML = "";
  
    // Add previous arrow
    const prevArrow = document.createElement("span");
    prevArrow.id = "prev-arrow";
    prevArrow.innerText = "←";
    prevArrow.addEventListener("click", () => goToPage(currentPage - 1));
    paginationDiv.appendChild(prevArrow);
  
    // Calculate start and end indices for pagination
    const totalFacts = internetFacts.length;
    let startPage = Math.floor(currentPage / pagesToShow) * pagesToShow;
    let endPage = Math.min(startPage + pagesToShow, totalFacts - lastPagesToShow);
  
    // Add first pages and ellipsis if needed
    if (startPage > 0) {
      paginationDiv.appendChild(createDot(0));
      paginationDiv.appendChild(createDot(1));
      paginationDiv.appendChild(createDot(2));
      paginationDiv.appendChild(createEllipsis());
    }
  
    // Add middle pages
    for (let index = startPage; index < endPage; index++) {
      paginationDiv.appendChild(createDot(index));
    }
  
    // Add last pages and ellipsis if needed
    if (endPage < totalFacts) {
      paginationDiv.appendChild(createEllipsis());
      for (let index = totalFacts - lastPagesToShow; index < totalFacts; index++) {
        paginationDiv.appendChild(createDot(index));
      }
    }
  
    // Add next arrow
    const nextArrow = document.createElement("span");
    nextArrow.id = "next-arrow";
    nextArrow.innerText = "→";
    nextArrow.addEventListener("click", () => goToPage(currentPage + 1));
    paginationDiv.appendChild(nextArrow);
  }
  
  function createDot(index) {
    const dot = document.createElement("span");
    dot.className = "pagination-dot";
    dot.innerText = index + 1; // Display page number
    dot.addEventListener("click", () => goToPage(index));
    if (index === currentPage) dot.classList.add("active");
    return dot;
  }
  
  function createEllipsis() {
    const ellipsis = document.createElement("span");
    ellipsis.innerText = "...";
    return ellipsis;
  }
  
  function goToPage(pageNumber) {
    if (pageNumber >= 0 && pageNumber < internetFacts.length) {
      currentPage = pageNumber;
      renderFact();
      updatePaginationDots();
    }
  }
  
  renderFact();
  updatePaginationDots();
  
  