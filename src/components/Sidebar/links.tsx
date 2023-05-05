import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md"
import {
    FaRegCompass,
    GiFilmStrip,
    TbDeviceGamepad2,
    TbMusic,
} from "react-icons/all"

export const mainLinks = [
    {
        icon: <MdHomeFilled className="text-xl" />,
        name: "Главная",
    },
    {
        icon: <FaRegCompass className="text-xl" />,
        name: "Найти",
    },
    {
        icon: <MdOutlineSlowMotionVideo className="text-xl" />,
        name: "Шортсы",
    },
    {
        icon: <MdSubscriptions className="text-xl" />,
        name: "Подписки",
    },
]

export const secondaryLinks = [
    {
        icon: <MdOutlineVideoLibrary className="text-xl" />,
        name: "Библиотека",
    },
    {
        icon: <MdHistory className="text-xl" />,
        name: "История",
    },
    {
        icon: <MdOutlineSmartDisplay className="text-xl" />,
        name: "Мои видео",
    },
    {
        icon: <MdOutlineWatchLater className="text-xl" />,
        name: "Смотреть позже",
    },
    {
        icon: <MdThumbUpOffAlt className="text-xl" />,
        name: "Понравившиеся видео",
    },
]

export const subscriptionLinks = [
    {
        icon: <TbMusic className="text-xl" />,
        name: "Музыка",
    },
    {
        icon: <MdOutlineSportsVolleyball className="text-xl" />,
        name: "Спорт",
    },
    {
        icon: <TbDeviceGamepad2 className="text-xl" />,
        name: "Игры",
    },
    {
        icon: <GiFilmStrip className="text-xl" />,
        name: "Фильмы",
    },
]

export const helpLinks = [
    {
        icon: <MdSettings className="text-xl" />,
        name: "Настройки",
    },
    {
        icon: <MdOutlineHelpOutline className="text-xl" />,
        name: "Помощь",
    },
    {
        icon: <MdOutlinedFlag className="text-xl" />,
        name: "История отзывов",
    },
    {
        icon: <MdOutlineFeedback className="text-xl" />,
        name: "Отправить отзыв",
    },
]

export const textLinks = [
    [
        "About",
        "Press",
        "Copyright",
        "Contact us",
        "Creator",
        "Advertise",
        "Developers",
    ],
    [
        "Terms",
        "Privacy",
        "Policy & Safety",
        "How YouTube works",
        "Test new features",
    ],
]
