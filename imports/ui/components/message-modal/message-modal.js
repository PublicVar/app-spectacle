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
                $(this.modalBodyId ).html("Vous serez averti avant le début du spectacle de cette école.");
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
                $(this.modalBodyId ).html("<b>Vous ne serez plus averti</b> avant le début du spectacle de cette école.");
                $(this.modalBodyId ).attr('class', 'alert alert-success');
            }
            $('#messageModal').modal('toggle');
        }
    }

    /**
     * Display message modal when a show is finished
     * @param error 
     */
    displayMessageFinished(error){
        if ($(this.modalId )) {
            if (error) {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                $(this.modalBodyId ).attr('class', 'alert alert-error');
            } else {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Le spectacle est marqué comme terminé.");
                $(this.modalBodyId ).attr('class', 'alert alert-success');
            }
            $('#messageModal').modal('toggle');
        }
    }

    /**
     * Display message modal when a show is not finished
     * @param error 
     */
    displayMessageUnfinished(error){
        if ($(this.modalId )) {
            if (error) {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                $(this.modalBodyId ).attr('class', 'alert alert-error');
            } else {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Le spectacle est marqué comme en cours.");
                $(this.modalBodyId ).attr('class', 'alert alert-success');
            }
            $('#messageModal').modal('toggle');
        }
    }

     /**
     * Display message modal when a show is incoming
     * @param error 
     */
    displayMessageIncoming(error){
        if ($(this.modalId )) {
            if (error) {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                $(this.modalBodyId ).attr('class', 'alert alert-error');
            } else {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Le spectacle va bientôt commencer.");
                $(this.modalBodyId ).attr('class', 'alert alert-success');
            }
            $('#messageModal').modal('toggle');
        }
    }

    /**
     * Display message modal when a show is not incoming
     * @param error 
     */
    displayMessageNotIncoming(error){
        if ($(this.modalId )) {
            if (error) {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                $(this.modalBodyId ).attr('class', 'alert alert-error');
            } else {
                $(this.modalTitleId ).html("Spectacle");
                $(this.modalBodyId ).html("Le spectacle ne vas pas bientôt commencer.");
                $(this.modalBodyId ).attr('class', 'alert alert-success');
            }
            $('#messageModal').modal('toggle');
        }
    }
}

export default new MessageModalDisplayer();

