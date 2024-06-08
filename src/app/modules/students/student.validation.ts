import { z } from 'zod';

const studentNameSchema = z.object({
    firstName: z.string({ message: 'First Name is required!' }).refine(
        (value) => {
            const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
            return firstNameStr === value;
        },
        { message: '{VALUE} is not in capitalize format' }
    ),
    middleName: z.string().optional(),
    lastName: z.string({ message: 'Last Name is required!' }),
});

const guardianSchema = z.object({
    fathersName: z.string({ message: 'Father\'s Name is required!' }),
    fathersOccupation: z.string({ message: 'Father\'s Occupation is required!' }),
    fathersContact: z.string({ message: 'Father\'s Contact is required!' }),
    mothersName: z.string({ message: 'Mother\'s Name is required!' }),
    mothersOccupation: z.string({ message: 'Mother\'s Occupation is required!' }),
    mothersContact: z.string({ message: 'Mother\'s Contact is required!' }),
});
const zodValidationStudentSchema = z.object({
    body: z.object({
        id: z.string({ message: 'ID is required!' }),
        password: z.string().optional(),
        user: z.string({ message: 'User is required!' }),
        name: studentNameSchema,
        gender: z.enum(['male', 'female']).optional(),
        dateOfBirth: z.string().optional(),
        email: z.string({ message: 'Email is required!' }).email(),
        contactNo: z.string({ message: 'Contact Number is required!' }),
        emergencyContact: z.string({ message: 'Emergency Contact is required!' }),
        presentAddress: z.string({ message: 'Present Address is required!' }),
        parmanentAddress: z.string({ message: 'Permanent Address is required!' }),
        profileImg: z.string({ message: 'Profile Image is required!' }),
        guardian: guardianSchema,
    })
})
export const zodValidation = {
    zodValidationStudentSchema
}