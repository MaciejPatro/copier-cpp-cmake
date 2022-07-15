import datetime
from copier_templates_extensions import ContextHook


class ContextUpdater(ContextHook):
    update = False

    def hook(self, context):
        if context['cpp_standard'] == 0:
            context['unit_testing'] = context['unit_testing_98']
        elif context['cpp_standard'] == 11:
            context['unit_testing'] = context['unit_testing_11']
        elif context['cpp_standard'] == 14:
            context['unit_testing'] = context['unit_testing_14']
        else:
            context['unit_testing'] = context['unit_testing_17']

        if context['license'] != 'None':
            context['creation_year'] = datetime.date.today().strftime("%Y")

        context['has_main'] = 'executable' in context['project_type']
