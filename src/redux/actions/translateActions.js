import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { languageOptions } from "../../constants";

export const getLanguages = createAsyncThunk("language/getLanguages", async () => {

    const res = await axios.request(languageOptions)

    return res.data.data.languages;

})

// apıden çeviri uç noktasına istek at

export const translateText = createAsyncThunk("translate/translateText", async (action_params) => {
    const { sourceLang, targetLang, text } = action_params;

    const params = new URLSearchParams();
    params.set('source_language', sourceLang.value);
    params.set('target_language', targetLang.value);
    params.set('text', text);

    const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'a6645991e2mshfdbbd47b5e6fd6fp199e0bjsna0128c3eaab9',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: params,
    };
    const res = await axios.request(options)

    console.log(res.data.data.translatedText)

    return res.data.data.translatedText
})