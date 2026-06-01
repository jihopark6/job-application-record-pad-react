import {useState, useRef, useEffect} from 'react';

export default function AppForm({onCancel, editMode, existingData}) {
    const [company, setCompany] = useState(existingData?.company || '');
    const [job_title, setJobTitle] = useState(existingData?.job_title || '');
    const [date, setDate] = useState(existingData?.date || '');
    const [status, setStatus] = useState(existingData?.status || 'applied');
    const [job_posting, setJobPosting] = useState(existingData?.job_posting || '');
    const [contact_info, setContactInfo] = useState(existingData?.contact_info || '');

    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    
    const newDataMode = () => {
        setCompany('');
        setJobTitle('');
        setDate('');
        setStatus('applied');
        setJobPosting('');
        setContactInfo('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { company, job_title, date, status, job_posting, contact_info };
        const existing = window.localStorage.getItem('applicationData');
        const existingData = existing ? JSON.parse(existing) : [];
        const updatedData = [...existingData, newData];
        window.localStorage.setItem('applicationData', JSON.stringify(updatedData));
        setCompany('');
        setJobTitle('');
        setDate('');
        setStatus('applied');
        setJobPosting('');
        setContactInfo('');
    };
    return (<form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="application_date">Date:</label>
                <input type="date" ref={inputFocus} id="application_date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                
                <div>
                <label htmlFor="company">Company Name:</label>
                <input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                </div>

                <div>
                <label htmlFor="job_title">Job Title:</label>
                <input type="text" id="job_title" name="job_title" value={job_title} onChange={(e) => setJobTitle(e.target.value)} required />
                </div>

                <div>
                <label htmlFor="job_posting">Job Posting:</label>
                <input type="text" id="job_posting" name="job_posting" value={job_posting} onChange={(e) => setJobPosting(e.target.value)} />
                </div>

                <div>
                <label htmlFor="contact_info">Contact Information:</label>
                <input type="tel"  id="contact_info" name="contact_info" value={contact_info} onChange={(e) => setContactInfo(e.target.value)} />
                </div>

                <div>
                <label htmlFor="status">Status:</label>
                <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="applied">Applied</option>
                    <option value="interviewing">Interviewing</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                    </select>
                </div>

                <div>
                    <button type="submit">Add</button>
                    <button type="button"  id="cancel_button" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>);
};