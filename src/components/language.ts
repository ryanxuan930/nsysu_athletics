import langTW from "@/assets/lang/zh_tw.json"
import langEN from "@/assets/lang/en_us.json"
import langJP from "@/assets/lang/ja_jp.json"

export default function(langCode: string): any{
    switch(langCode){
        case "en_US": 
            return langEN;
        case "zh_TW": 
            return langTW;
        case "ja_JP": 
            return langJP;
    }
}