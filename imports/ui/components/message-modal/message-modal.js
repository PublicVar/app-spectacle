/**
 * Display modal with specfic message
 */
class MessageModalDisplayer {
    constructor(){
        this.modalId = "#messageModal";
        this.modalTitleId = this.modalId + " #messageModalTitle";
        this.modalBodyId = this.modalId + " #messageModalBody";
    }
    /**
     * Display message when an user follow a school
     * @param error 
     */
    displayMessageFollow(error){
        if ($(this.modalId )) {

            if (error) {
                $(this.modalTitleId ).html("Avertissez-moi");
                $(this.modalBodyId ).html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                $(this.modalBodyId ).attr('class', 'alert alert-error');
            } else {
                $(this.modalTitleId ).html("Avertissez-moi");
                $(this.modalBodyId ).html("Vous serez averti avant le commencement du spectacle de cette école.");
                $(this.modalBodyId ).attr('class', 'alert alert-success');
            }
            $('#messageModal').modal('toggle');
        }
    }

    /**
     * Display message when an user unfollow a school
     * @param error 
     */
    displayMessageUnfollow(error){
        if ($(this.modalId )) {
            if (error) {
                $(this.modalTitleId ).html("Avertissez-moi");
                $(this.modalBodyId ).html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                $(this.modalBodyId ).attr('class', 'alert alert-error');
            } else {
                $(this.modalTitleId ).html("Avertissez-moi");
                $(this.modalBodyId ).html("<b>Vous ne serez plus averti</b> avant le commencement du spectacle de cette école.");
                $(this.modalBodyId ).attr('class', 'alert alert-success');
            }
            $('#messageModal').modal('toggle');
        }
    }
}

export default new MessageModalDisplayer();

