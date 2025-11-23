def on_post_page_macros(env):
    """
    Actions to be done after macro interpretation,
    when the macros have been rendered
    This will add a (Markdown or HTML) footer -- produced by Python.
    """
    footer = "f'\n\n'{env.page.title} FROM TEST MACRO!"
    env.markdown += footer
