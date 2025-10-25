import Link from "next/link";
import {ReadMoreStoriesButton} from "@/components";

export default function NotFound() {
    return (
        <div style={{textAlign: "center", marginTop: "100px"}}>
            <h1 style={{
                fontSize: '48px',
                color: 'Black',
                fontStyle: 'italic',
                fontFamily: 'font-family: "Old Standard TT", sans-serif',
                textTransform: 'uppercase'
            }}>Oops!</h1>
            <p>You've reached our 404 page.</p>
            <Link href="/">
                <ReadMoreStoriesButton children={"Read More Stories"}/>
            </Link>
        </div>
    );
}
