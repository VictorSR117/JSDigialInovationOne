
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/VictorSR117/JSDigialInovationOne/main/portifolio-dio-js/js-developer-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}