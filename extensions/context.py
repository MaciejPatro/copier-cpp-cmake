import datetime
from copier_templates_extensions import ContextHook


class ContextUpdater(ContextHook):
    update = False

    def hook(self, context):
        if context['unit_testing_98']:
            context['unit_testing'] = context['unit_testing_98']
        else:
            context['unit_testing'] = context['unit_testing_11']

        if context['license'] != 'None':
            context['creation_year'] = datetime.date.today().strftime("%Y")

        context['dependencies'] = context['unit_testing'] != 'None'
        context['has_main'] = 'executable' in context['project_type']
