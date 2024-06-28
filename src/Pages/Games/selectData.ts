export const orderOptions = [
    {value: 'name', title: 'Name'},
    {value: 'released', title: 'Released'},
    {value: 'rating', title: 'Rating'},
    {value: 'metacritic', title: 'Metacritic'},
    {value: 'added', title: 'date added'},
]

export const platformsOptions = [
    {
        "title": "PC",
        "value": '4'
    },
    {
        "title": "PlayStation",
        "value": '187, 18',
        subOptions: [
            {
                "title": "PlayStation 4",
                "value": '18'
            },
            {
                "title": "PlayStation 5",
                "value": '187'
            },
            {
                "title": "PlayStation 3",
                "value": '16'
            },
            {
                "title": "PlayStation 2",
                "value": '15'
            },
            {
                "title": "PlayStation",
                "value": '27'
            },
        ]
    },

    {
        "title": "Xbox",
        "value": '1, 186',
        subOptions: [
            {
                "title": "Xbox One",
                "value": '1'
            },
            {
                "title": "Xbox Series S/X",
                "value": '186'
            },
            {
                "title": "Xbox 360",
                "value": '14'
            },
            {
                "title": "Xbox",
                "value": '80'
            },
        ]
    },

    {
        "title": "Nintendo",
        "value": '7, 8, 9, 13'
    },
    {
        "title": "iOS",
        "value": '3'
    },
    {
        "title": "Android",
        "value": '21'
    },
    {
        "title": "macOS",
        "value": '5'
    },
    {
        "title": "Linux",
        "value": '6'
    },
]

export const releasedOptions = () => {
    const options = []

    const createReleaseOption = (year: number, yearCount: number) => {
        const startDate = '-01-01,'
        const endDate = '-12-31'
        const checkDateFormat = (date: number) => {
            return String(date).length === 2 ? String(date) : '0' + String(date)
        }

        const fillSubOption = () => {
            const options = []
            const currentDate = '-' + checkDateFormat(new Date().getMonth()) + '-' + checkDateFormat(new Date().getDay())

            for (let i = 0; i <= yearCount; i++) {
                options.push(
                    year + i === new Date().getFullYear()
                        ?{
                            value: (year + i) + startDate + (year + i) + currentDate,
                            title: String(year + i),
                        }
                        : {

                            value: (year + i) + startDate + (year + i) + endDate,
                            title: String(year + i),
                        }
                )
            }
            return options
        }

        return {
            value: year + startDate + (year + yearCount) + endDate,
            title: year + '-' + (year + yearCount),
            subOptions: fillSubOption()
        }
    }

    for (let i = 1980; i < 2020; i = i + 10) {
        options.push(createReleaseOption(i, 9))
    }

    options.push(createReleaseOption(2020, new Date().getFullYear() - 2020))
    return options
}

