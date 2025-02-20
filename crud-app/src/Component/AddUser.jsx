import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    PRN: '',
    username: '',
    email: '',
    phone: '',
    currentyear: '',
    branch: '',
    CGPA: '',
    SSC_marks: '',
    HSC_marks: '',
    resume:''
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, PRN, username, email, phone, currentyear, branch, CGPA, SSC_marks, HSC_marks,resume } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onFileChange = (e) => {
        setUser({ ...user, resume: e.target.files[0] });
    };

    const addUserDetails = async () => {
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('PRN', PRN);
        // formData.append('username', username);
        // formData.append('email', email);
        // formData.append('phone', phone);
        // formData.append('currentyear', currentyear);
        // formData.append('branch', branch);
        // formData.append('CGPA', CGPA);
        // formData.append('SSC_marks', SSC_marks);
        // formData.append('HSC_marks', HSC_marks);
        // formData.append('resume', resume);
        await addUser(user);
        navigate('/admin/all');
    };

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">PRN</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='PRN' value={PRN} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Current Year</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='currentyear' value={currentyear} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='branch' value={branch} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">CGPA</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='CGPA' value={CGPA} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">SSC Marks</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='SSC_marks' value={SSC_marks} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">HSC Marks</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='HSC_marks' value={HSC_marks} id="my-input" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Resume (PDF)</InputLabel>
                <Input
                    type="file"
                    accept="application/pdf"
                    onChange={onFileChange}
                    name="resume"
                    id="my-input"
                />
            </FormControl> */}
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>

        </Container>
    )
}

export default AddUser;