import rpy2.robjects as robjects
from rpy2.robjects.packages import importr
import rpy2.robjects.packages as rpackages
# import R's "base" package
base = importr('base')

# import R's "utils" package
utils = importr('utils')

# select a mirror for R packages
utils.chooseCRANmirror(ind=1) # select the first mirror in the list
""" 
# R package names
packnames = ('ggplot2', 'hexbin')

# R vector of strings
from rpy2.robjects.vectors import StrVector

# Selectively install what needs to be install.
# We are fancy, just because we can.
names_to_install = [x for x in packnames if not rpackages.isinstalled(x)]
if len(names_to_install) > 0:
    utils.install_packages(StrVector(names_to_install))

 """

psych = rpackages.importr('psych')
v = robjects.FloatVector([1.1, 2.2, 3.3, 4.4, 5.5, 6.6])
m = robjects.r['matrix'](v, nrow = 2)
results = psych.ICC(m)
print(results[0][2])