
export default function convertDate(date) {
    const event = new Date('2023-09-07T07:19:52.628Z');
    const options = {
        month: "short",
        day: "numeric",
    };

    return event.toLocaleString('en-US', options)
}
