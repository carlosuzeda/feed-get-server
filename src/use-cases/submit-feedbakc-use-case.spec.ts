import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);
    
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(
          submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64,asdkaskdkasdka",
          })
        ).resolves.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it("should not be able to sumit feedback without type", async () => {
    await expect(
    submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,asdkaskdkasdka",
            })
        ).rejects.toThrow();
    });

    it("should not be able to sumit feedback without comment", async () => {
        await expect(
        submitFeedback.execute({
            type: "BUG",
            comment: "teste",
            screenshot: "data:image/png;base64,asdkaskdkasdka",
            })
          ).rejects.toThrow();
        });
    
        it("should not be able to sumit feedback with an invalid screenshot", async () => {
          await expect(
            submitFeedback.execute({
              type: "BUG",
              comment: "example comment",
              screenshot: "data:image/png;base64,asdkaskdkasdka",
            })
          ).rejects.toThrow();
        });
});


