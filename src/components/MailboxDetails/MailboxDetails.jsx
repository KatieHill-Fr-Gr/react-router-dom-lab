

const MailboxDetails = () => {

    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )
    return <ul>
        <li>
        </li>
    </ul>
}

// Here the page will show the details of each individual post box
// So box owner and size

export default MailboxDetails