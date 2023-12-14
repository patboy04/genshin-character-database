export const modifyString = (name) => {
    let modifiedCharacterName = name.replace("-", "_")
    switch(modifiedCharacterName) {
        case 'ayaka':
            modifiedCharacterName = "kamisato_ayaka";
            break;
        case 'ayato':
            modifiedCharacterName = "kamisato_ayato";
            break;
        case 'kazuha':
            modifiedCharacterName = "kaedehara_kazuha";
            break;
        case 'kokomi':
            modifiedCharacterName = "sangonomiya_kokomi";
            break;
        case 'raiden':
            modifiedCharacterName = "raiden_shogun";
            break;
        case 'sara':
            modifiedCharacterName = "kujou_sara";
            break;
    }
    return modifiedCharacterName;
}