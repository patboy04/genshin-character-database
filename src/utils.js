import inazumaBg from "./assets/inazuma.png"
import monsdtadtBg from "./assets/monstdadt.png"
import liyueBg from "./assets/liyue.png"
import sumeruBg from "./assets/sumeru.png"
import snezhnayaBg from "./assets/snezhnaya.png"
import defaultBg from "./assets/default.png"

export const modifyString = (name) => {
    let modifiedCharacterName = name.replace(/-/g, "_")
    modifiedCharacterName = modifyLongName(modifiedCharacterName)
    return modifiedCharacterName;
}

export const modifyLongName = (name) => {
    switch(name.toLowerCase()) {
        case 'ayaka':
        case 'kamisato ayaka':
            name = "kamisato_ayaka";
            break;
        case 'ayato':
        case 'kamisato ayato':
            name = "kamisato_ayato";
            break;
        case 'kazuha':
        case 'kaedehara kazuha':
            name = "kaedehara_kazuha";
            break;
        case 'kokomi':
        case 'sangonomiya kokomi':
            name = "sangonomiya_kokomi";
            break;
        case 'raiden':
        case 'raiden shogun':
            name = "raiden_shogun";
            break;
        case 'sara':
        case 'kujou sara':
            name = "kujou_sara";
            break;
        case 'itto':
        case 'arataki itto':
            name = "arataki_itto"
            break;
        case 'kuki':
        case 'shinobu':
        case 'kuki shinobu':
            name = "kuki_shinobu";
            break;
        case 'heizou':
        case 'shikanoin heizou':
            name = "shikanoin_heizou";
            break;
        case 'hutao':
        case 'hu tao':
            name = "hu_tao"
            break;
        case 'traveler':
            name = "traveler_anemo"
            break;
    }
    return name
}

export const removeFaultyArtifacts = (artifactDataArray) => {
    console.log(artifactDataArray)
    let newArtifactArray = artifactDataArray;
    for(let i = artifactDataArray.length; i > 0; i--) {
        let artifact = artifactDataArray[i]; 
        if(artifact == "glacier-and-snowfield"
            || artifact == "prayers-for-destiny"
            || artifact == "prayers-to-springtime"
            || artifact == "prayers-for-illumination"
            || artifact == "prayers-for-wisdom"
            || artifact == "prayers-to-the-firmament" ) {
                newArtifactArray.splice(i, 1)
            }
    };
    return newArtifactArray;
};

export const modifyArtifactName = (artifact) => {
    const list = [
        ["defenders_will", "defender_s_will"],
        ["gladiators_finale", "gladiator_s_finale"],
        ["ocean-hued_clam", "ocean_hued_clam"],
        ["shimenawas_reminiscence", "shimenawa_s_reminiscence"],
    ];

    for(let i = 0; i < list.length; i++){
        artifact = artifact.replace(list[i][1], list[i][0]);
    }

    return artifact;
}



export const colorStyle = (characterNation) => {
    return characterNation == "mondstadt" 
    ? "#3DEDC9" 
    : characterNation == "liyue" 
    ? "#E7C476"
    : characterNation == "inazuma" 
    ? "#9579C1"
    : characterNation == "sumeru" 
    ? "#AFE546" 
    : characterNation == "fontaine" 
    ? "#0191D3" 
    : characterNation == "natlan" 
    ? "#F6BF1D"
    : characterNation == "snezhnaya" 
    ? "#E1F7F7"
    : ""
} 

export const nationImage = (characterNation) => {
    return characterNation == "mondstadt" 
    ? `url(${monsdtadtBg})` 
    : characterNation == "liyue" 
    ? `url(${liyueBg})` 
    : characterNation == "inazuma" 
    ? `url(${inazumaBg})`
    : characterNation == "sumeru" 
    ? `url(${sumeruBg})` 
    : characterNation == "snezhnaya"
    ? `url(${snezhnayaBg})`
    : `url(${defaultBg})`  
} 

