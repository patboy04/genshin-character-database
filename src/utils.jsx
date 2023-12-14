import React from "react";

export const modifyString = (name) => {
    let modifiedCharacterName = name.replace("-", "_")
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

