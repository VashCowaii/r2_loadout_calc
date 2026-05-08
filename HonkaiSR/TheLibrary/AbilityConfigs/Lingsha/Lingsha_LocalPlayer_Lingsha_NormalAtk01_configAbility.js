const configAbility = {
  "fileName": "Lingsha_LocalPlayer_Lingsha_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ]
    }
  ],
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}